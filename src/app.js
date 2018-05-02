
var EThing = require("./core.js");
var utils = require("./utils.js");
var Resource = require("./resource.js");

/**
 * Constructs an App instance from an object decribing an application. Should not be called directly. Use instead {@link EThing.list}.
 * @protected
 * @class The App resource handle an application
 * @memberof EThing
 * @extends EThing.Resource
 * @param {object} json
 */
var App = function(json)
{
	Resource.call(this, json);
}
utils.inherits(App, Resource);

// specific methods

/**
 * Returns the size of this application in bytes.
 * @this {EThing.App}
 * @returns {number}
 */
App.prototype.size = function() {
	return this._json.size || 0;
}

/**
 * If this application has an icon, it returns his link, else it returns null.
 * 
 * @this {EThing.App}
 * @param {boolean} [auth=false] wether or not attach any authentication element. Necessary if you are not using {@link EThing.request}.
 * @returns {string|null}
 * @example
 * // the simple way
 * var image = new Image();
 * image.src = imageFile.iconLink(true);
 * document.body.appendChild(image);
 *
 * // the hard way
 * EThing.request({
 *   url: imageFile.iconLink(),
 *   dataType: "blob"
 * }).then(function(blobData){
 *   // success
 *   var image = new Image();
 *   image.src = window.URL.createObjectURL( blobData );
 *   
 *   document.body.appendChild(image);
 * });
 */
App.prototype.iconLink = function(auth) {
	return this._json.hasIcon ? EThing.toApiUrl('apps/'+this.id()+'/icon',auth) : null;
}

/**
 * Returns the link to access the content.
 * @this {EThing.App}
 * @param {boolean} [auth=false] wether or not attach any authentication element. Necessary if you are not using {@link EThing.request}.
 * @returns {string}
 * @example
 * // using EThing.request() :
 * EThing.request(app.getContentUrl()).then(function(content){
 *   // success
 *   console.log('content as text : '+content);
 * });
 */
App.prototype.getContentUrl = function(auth) {
	return EThing.toApiUrl('apps/'+this.id(),auth);
}

/**
 * Last time the content of this resource was modified
 * @this {EThing.App}
 * @returns {Date}
 */
App.prototype.contentModifiedDate = function() {
	return new Date(this._json.contentModifiedDate);
}

/**
 * Return the scope of this app.
 * @this {EThing.App}
 * @returns {string}
 */
App.prototype.scope = function() {
  return (typeof this._json.scope == 'string') ? this._json.scope : '';
}

/**
 * Return the version of this app or null if this app is not versioned.
 * @this {EThing.App}
 * @returns {string}
 */
App.prototype.version = function() {
  return this._json.version || null;
}

/**
 * Gets the code of this application in text/html.
 * @this {EThing.App}
 * @param {function(data)} [callback] it is executed once the request is complete whether in failure or success
 * @returns {EThing.App} The instance on which this method was called.
 */
App.prototype.read = function(callback){
	var args = [].slice.call(arguments);
    args.unshift(this);
    return App.read.apply(EThing, args);
}

/**
 * Writes some HTML script in this application. Only available for {@link EThing.App#isEditable|editable app}
 * @this {EThing.App}
 * @param {string} data the full HTML script
 * @param {function(data)} [callback] it is executed once the request is complete whether in failure or success
 * @returns {EThing.App} The instance on which this method was called.
 */
App.prototype.write = function(data, callback){
	var args = [].slice.call(arguments);
    args.unshift(this);
    return App.write.apply(EThing, args);
}




/**
 * Creates a new Application from the following attributes :
 *   - name {string} __required__ the name of the application
 *   - description {string} a string describing this application 
 *   - data {object} key/value pairs to attach to this application
 *   - content {string} the full base64 encoded script
 *   - icon {string} the base64 encoded icon of this application
 *
 * @method EThing.App.create
 * @param {object} attributes
 * @param {function(data)} [callback] it is executed once the request is complete whether in failure or success
 * @returns {Promise}
 * @fires EThing#ething.app.created
 * @example
 * EThing.App.create({
 *   name: "myApp",
 *   content: "<html><body>hello world !</body></html>",
 *   icon: <icon_data>, // File, Blob, Buffer, ArrayBuffer or base64 string
 *   scope: "resource:read settings:read",
 * }).then(function(resource){
 *     console.log('the new app can be accessed through : ' + resource.url());
 * })
 */
App.create = function(json,callback){
	
    var json = Object.assign({}, json);
    
    return new Promise(function(resolve, reject) {
        utils.toBase64(json.content || '', function(content){
            json.content = content;
            
            utils.toBase64(json.icon || '', function(icon){
                json.icon = icon;
                
                EThing.request({
                    'url': '/apps',
                    'dataType': 'json',
                    'method': 'POST',
                    'contentType': "application/json; charset=utf-8",
                    'data': json,
                    'converter': EThing.resourceConverter
                  }, callback).then(function(app){
                    
                    EThing.trigger('ething.app.created',[app]);
                    
                    resolve(app)
                  }).catch(function(err){
                    reject(err)
                  });
                  
            });
        });
    })
    
};


/*
Resource,callback
*/
App.read = function(a,b)
{
	var file_id = null, context;
	if(a instanceof App){
		context = a;
		file_id = a.id();
	}
	else if(utils.isId(a))
		file_id = a;
	else {
		throw "First argument must be an App object or an app id !";
		return;
	}
	
	var callback = b;
	
	return EThing.request({
		'url': '/apps/' + file_id,
		'method': 'GET',
		'dataType': 'text',
		'context': context
	},callback);
};

/*
Resource,data,callback
*/
App.write = function(a,b,c)
{
	var file_id = null, context;
	if(a instanceof App){
		context = a;
		file_id = a.id();
	}
	else if(utils.isId(a))
		file_id = a;
	else {
		throw "First argument must be a App object or an app id !";
		return;
	}
	
	if( typeof b != 'string') {
		throw "Second argument must be a string !";
		return;
	}
	
	var callback = c;
	
	return EThing.request({
		'url': '/apps/' + file_id,
		'dataType': 'json',
		'method': 'PUT',
		'contentType': (typeof b == 'string') ? 'text/plain' : 'application/octet-stream',
		'data': b,
		'context': context,
		'converter': EThing.resourceConverter
	},callback);
};

/*
Resource,callback
return data as arraybuffer
*/
App.getIcon = function(a,b)
{
	var file_id = null, context;
	if(a instanceof App){
		context = a;
		file_id = a.id();
	}
	else if(utils.isId(a))
		file_id = a;
	else {
		throw "First argument must be a App object or an app id !";
		return;
	}
	
	var callback = b;
	
	return EThing.request({
		'url': '/apps/' + file_id + '/icon',
		'method': 'GET',
		'dataType': 'arraybuffer',
		'context': context
	},callback);
};

EThing.App = App;
	
module.exports = App;
