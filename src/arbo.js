
/**
 * This library helps to search and find resources.
 *
 * @example
 * // list all the txt files in the dir1 folder
 * EThing.arbo.load(function(){
 *   // the next line may list Table that ends with ".txt"
 *   console.log(EThing.arbo.glob('dir1/*.txt');
 * })
 *
 * @namespace {object} EThing.arbo
 */


var EThing = require("./core.js");
var utils = require("./utils.js");
var Resource = require("./resource.js");
var Event = require("./event.js");
var globToRegExp = require('glob-to-regexp');


var resources = [],
	loaddfr = null;



function clear(){
	resources = [];
	loaddfr = null;
}


/**
 * Load all available resources.
 * @memberof EThing.arbo
 * @param {function(EThing.Resource[])} [callback] function executed once the resources are loaded
 * @param {boolean} [force] force to reload the entire resources
 * @returns {Promise}
 */
function load(callback, force) {
    var self = this;

    if(force) clear();

    if(loaddfr===null){
    // load the resources
        loaddfr = EThing.request({
            'url': '/resources',
            'method': 'GET',
            'dataType': 'json'
        }).then(function(rs) {

            loaddfr = true;

            // reset
            resources = rs.map(function(resource) {
                return EThing.instanciate(resource);
            }).filter(function(resource){
                return !!resource;
            });

            EThing.trigger('ething.arbo.loaded');

            return resources;
        });
    }

    loaddfr.then(function(resources){
        if (typeof callback == 'function')
            callback.call(self, resources)
    })

    return loaddfr
};

function refresh(callback) {
    var self = this;

	return EThing.request({
		'url': '/resources',
		'method': 'GET',
		'dataType': 'json'
	}).then(function(rs) {

		rs = rs.map(function(r){
			return EThing.instanciate(r);
		}).filter(function(r){
			return r;
		});

		update(rs, true);

        if (typeof callback === 'function')
            callback.call(self, resources)

		return resources;
	});

}



function update(newResources, replaceAll, noTrigger){

	if(!Array.isArray(newResources)) newResources = [newResources];

	var removed = [];
	var added = [];
	var updated = [];

	if(replaceAll){
		// check for removed resources
		// search for resources that have been deleted
		resources.forEach(function(r, index){

			for(var i in newResources){
				if(newResources[i].id() === r.id()){
					return;
				}
			}

			removed.push(index);
		});

		removed.map(function(i){
			var r = resources[i];
			resources.splice(i, 1);
			return r;
		});
	}

	// check for new resources or update ones
	newResources.forEach(function(r, index){

		var found = false;
		for(var i in resources){
			if(resources[i].id() === r.id()){
				found = i;
				break;
			}
		}
		if(found===false){
			// new resource
			added.push(r);
            resources.push(r);
		} else {
			// maybe updated ?
			var o = resources[found];
			if(o._fromJson(r.json())){
				updated.push(o);
			}
			newResources[index] = o;
		}

	});

	var hasChanged = removed.length>0 || added.length>0 || updated.length>0;

	if(!noTrigger && hasChanged){
		EThing.trigger('ething.arbo.changed', [added, removed, updated]);
	}

	return {
		resources : newResources,
		removed : removed,
		added : added,
		updated: updated,
		hasChanged: hasChanged
	};
}



function remove(resource,noTrigger){
	if(Array.isArray(resource)){
		resource.forEach(function(r){
			remove(r,noTrigger);
		});
		return;
	}

	if(typeof resource === 'string'){
		resource = get(resource);
		if(!resource) return;
	}

	var removed = [];

	for (var i=0; i<resources.length; i++) {
		var r = resources[i];
		if (r.id() == resource.id()) {
			removed.push(r);
			resources.splice(i, 1);
			break;
		}
	}

	if(!noTrigger && removed.length){
		EThing.trigger('ething.arbo.changed', [[], removed, []]);
	}
}



/**
 * Find a resource by its unique id. For all the resources except the Folder, the id is a 7 character alphanumeric string.
 * Since there is no duplicate name for folders, their id is equal to their name.
 *
 * @memberof EThing.arbo
 * @param {string} id 7 character alphanumeric string for all resources except for Folders which is their name.
 * @return {EThing.Resource|undefined} return undefined if not found
 */
function get(id) {
	for(var i=0; i<resources.length; i++)
		if(resources[i].id() === id)
			return resources[i];
};


/**
 * Returns a list of resources that match a *-wildcard style glob string.
 *
 * @memberof EThing.arbo
 * @param {string} filter only the resources that match the glob filter are returned.
 * @return {EThing.Resource[]}
 * @example
 * // return all jpg and png files in 'dir' directory :
 * EThing.arbo.glob('dir/{*.jpg,*.png}')
 *
 * // return all resource under 'dir' directory or subdirectories :
 * EThing.arbo.glob('dir/**')
 */
function glob(filter){
    var re = globToRegExp(filter, {
        extended: true,
        globstar: true
    });
	return resources.filter(function(r){
        return re.test(r.name())
	});
}


/**
 * return all the resources. Same as {@link EThing.arbo.find|EThing.arbo.find()}.
 * @memberof EThing.arbo
 * @return {EThing.Resource[]}
 */
function list(){
	return resources;
}


/**
 * dispatch an event emitted by the server (through SSE or socketio)
 * @memberof EThing.arbo
 */
function dispatch (event) {
  // console.log(event)

  var name = event.name,
    isResourceEvent = !!event.data.resource,
    resource,
    evt = Event(name, {
      data: event.data,
      originalEvent: event
    });

  if(isResourceEvent){
    var resourceId = event.data.resource.id;

    if (event.data.resource) {
      if (name === 'ResourceDeleted') {
        remove(resourceId);
      } else {
        update(EThing.instanciate(event.data.resource))
      }
    }

    resource = get(resourceId);
    if(resource){
      resource.trigger(evt);
    }

  }

  EThing.trigger(evt);
}



EThing.on('ething.resource.removed', function(evt, resourceId){
	var resource = get(resourceId);
	if(resource)
		remove(resource);
});




EThing.arbo = {
	load: load,
	lastRefreshTs: 0,
    /**
     * Refresh the resources list from the server.
     *
     * @memberof EThing.arbo
     * @return {Promise} return a Promise object
     */
	refresh: function(){
		this.lastRefreshTs = Date.now();
		return refresh.apply(this, Array.prototype.slice.call(arguments));
	},
	remove: remove,
	update: update,
	get: get,
	list: list,
	glob: glob,

	/**
	 * Check if the resources are loaded (ie. if the {@link EThing.arbo.load} function has been called and has returned).
	 * @memberof EThing.arbo
	 * @return {boolean}
	 */
	isLoaded: function(){
		return loaddfr === true || ( loaddfr && loaddfr.state() == 'resolved' );
	},
  dispatch: dispatch
};

module.exports = EThing.arbo;
