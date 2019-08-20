
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
var globToRegExp = require('glob-to-regexp');



EThing.on('ething.resource.removed', function(evt, resourceId){
	var resource = EThing.arbo.get(resourceId);
	if(resource)
		EThing.arbo.remove(resource);
});




EThing.arbo = {

  resources: [],
  loaddfr: null,

  /**
   * Load all available resources.
   * @memberof EThing.arbo
   * @param {function(EThing.Resource[])} [callback] function executed once the resources are loaded
   * @param {boolean} [force] force to reload the entire resources
   * @returns {Promise}
   */
  load: function(callback, force) {
      var self = this;

      if(this.loaddfr===null || force){
      // load the resources
          this.loaddfr = EThing.request({
              'url': '/resources',
              'method': 'GET',
              'dataType': 'json'
          }).then(function(rs) {

              self.loaddfr = true;

              // reset
              self.resources.splice(0,self.resources.length) // keep reference

              rs.map(function(resource) {
                  return EThing.instanciate(resource);
              }).filter(function(resource){
                  return !!resource;
              }).forEach(function(r) {
                self.resources.push(r)
              });

              EThing.trigger('ething.arbo.loaded');

              return self.resources;
          });
      }

      this.loaddfr.then(function(resources){
          if (typeof callback == 'function')
              callback.call(self, resources)
      })

      return this.loaddfr
  },

	lastRefreshTs: 0,

  /**
   * Refresh the resources list from the server.
   *
   * @memberof EThing.arbo
   * @return {Promise} return a Promise object
   */
  refresh: function(callback) {
    var self = this;
    this.lastRefreshTs = Date.now();

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

      self.update(rs, true);

          if (typeof callback === 'function')
              callback.call(self, self.resources)

      return self.resources;
    });

  },

	remove: function (resource,noTrigger){
    if(Array.isArray(resource)){
      resource.forEach(function(r){
        remove(r,noTrigger);
      });
      return;
    }

    if(typeof resource === 'string'){
      resource = this.get(resource);
      if(!resource) return;
    }

    var removed = [];

    for (var i=0; i<this.resources.length; i++) {
      var r = this.resources[i];
      if (r.id() == resource.id()) {
        removed.push(r);
        this.resources.splice(i, 1);
        break;
      }
    }

    if(!noTrigger && removed.length){
      EThing.trigger('ething.arbo.changed', [[], removed, []]);
    }
  },

  update: function (newResources, replaceAll, noTrigger){

    if(!Array.isArray(newResources)) newResources = [newResources];

    var self = this;
    var removed = [];
    var added = [];
    var updated = [];

    if(replaceAll){
      // check for removed resources
      // search for resources that have been deleted
      this.resources.forEach(function(r, index){

        for(var i in newResources){
          if(newResources[i].id() === r.id()){
            return;
          }
        }

        removed.push(index);
      });

      removed.map(function(i){
        var r = self.resources[i];
        self.resources.splice(i, 1);
        return r;
      });
    }

    // check for new resources or update ones
    newResources.forEach(function(r, index){

      var found = false;
      for(var i in self.resources){
        if(self.resources[i].id() === r.id()){
          found = i;
          break;
        }
      }
      if(found===false){
        // new resource
        added.push(r);
        self.resources.push(r);
      } else {
        // maybe updated ?
        var o = self.resources[found];
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
  },


  /**
   * Find a resource by its unique id. For all the resources except the Folder, the id is a 7 character alphanumeric string.
   * Since there is no duplicate name for folders, their id is equal to their name.
   *
   * @memberof EThing.arbo
   * @param {string} id 7 character alphanumeric string for all resources except for Folders which is their name.
   * @return {EThing.Resource|undefined} return undefined if not found
   */
  get: function (id) {
    for(var i=0; i<this.resources.length; i++)
      if(this.resources[i].id() === id)
        return this.resources[i];
  },


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
  glob: function (filter){
      var re = globToRegExp(filter, {
          extended: true,
          globstar: true
      });
    return this.resources.filter(function(r){
          return re.test(r.name())
    });
  },


  /**
   * return all the resources. Same as {@link EThing.arbo.find|EThing.arbo.find()}.
   * @memberof EThing.arbo
   * @return {EThing.Resource[]}
   */
  list: function (){
    return this.resources;
  },

  /**
   * Returns a list of resources that pass the test implemented by the provided function.
   *
   * @memberof EThing.arbo
   * @param {function} filter Function is a predicate, to test each resource of the array. Return true to keep the resource, false otherwise.
   * @return {EThing.Resource[]}
   */
  find: function (f) {
    return this.resources.filter(f)
  },

	/**
	 * Check if the resources are loaded (ie. if the {@link EThing.arbo.load} function has been called and has returned).
	 * @memberof EThing.arbo
	 * @return {boolean}
	 */
	isLoaded: function(){
		return this.loaddfr === true || ( this.loaddfr && this.loaddfr.state() == 'resolved' );
	},


};

module.exports = EThing.arbo;
