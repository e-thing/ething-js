
var utils = require("./utils.js");
var EventEngine = require("./eventEngine.js");
var DeferredObject = require("./deferredObject.js");
var EThing = require("./core.js");


/**
 * Base class of all the resources
 * @protected
 * @class
 * @memberOf EThing
 * @param {object} json
 */
var Resource = function (json)
{
	DeferredObject.call(this);
	
	EventEngine(this);
	
	this._fromJson(json, true);
}
utils.inherits(Resource,DeferredObject);

// loader
Resource.prototype._fromJson = function(json, noTrigger){
	
	var updated = this._json && json && this._json.modifiedDate && json.modifiedDate && this._json.modifiedDate !== json.modifiedDate;
	var updatedKeys = [];
	
	json = utils.extend({
		name:null,
		id:null,
		type:null,
        extends: [],
		createdBy:null,
		createdDate: 0,
		modifiedDate: 0,
		data: null,
		description: ''
	}, json || {});
	
	if(!noTrigger && updated) {
		// list the kays that have been updated
		Object.keys(json).forEach(function(key){
			if((typeof this._json[key] === 'undefined') || !utils.isEqual(json[key],this._json[key])){
				updatedKeys.push(key);
			}
		},this);
	}
	
	this._json = json;
	
	if(!noTrigger && updated) {
		//console.log('resource updated '+this.name());
		this.trigger('updated', [updatedKeys]);
		EThing.trigger('ething.resource.updated',[this, updatedKeys]);
	}
	
	return updated;
}


/**
 *  Returns the representation of this instance
 * @this {EThing.Resource}
 * @returns {object}
 */
Resource.prototype.json = function(){
	return this._json;
}

/**
 * Return true if the resource is of the given type.
 * @this {EThing.Resource}
 * @param {string} type
 * @returns {boolean}
 */
Resource.prototype.isTypeof = function(type) {
	return this._json.extends.indexOf(type) !== -1;
}

// path accessors
/**
 * Returns the name of this resource. A name is constructed as __PathName/FileName__.
 * To get only the FileName, see {@link EThing.Resource#basename}.
 * To get only the PathName, see {@link EThing.Resource#dirname}.
 * @this {EThing.Resource}
 * @returns {string}
 */
Resource.prototype.name = function() {
	return this._json.name;
}
/**
 * Returns the path of this resource
 * @this {EThing.Resource}
 * @returns {string}
 */
Resource.prototype.dirname = function() {
	return EThing.Resource.dirname(this._json.name);
}
/**
 * Returns the basename of this resource
 * @this {EThing.Resource}
 * @returns {string}
 */
Resource.prototype.basename = function() {
	return EThing.Resource.basename(this._json.name);
}
/**
 * Returns the extension of this resource
 * @this {EThing.Resource}
 * @returns {string}
 */
Resource.prototype.extension = function(){
	return EThing.Resource.extension(this._json.name);
}
/**
 * Returns the id of this resource. This id is unique and immutable.
 * @this {EThing.Resource}
 * @returns {string}
 */
Resource.prototype.id = function(){
	return this._json.id;
}
/**
 * Returns the id of the Resource which creates it if any, or returns null.
 * @this {EThing.Resource}
 * @returns {string|null}
 */
Resource.prototype.createdBy = function(){
	return this._json.createdBy;
}

/**
 *  Returns the type of this resource :
 *  - "File"
 *  - "Table"
 *  - "App"
 *  - "Device"
 * @this {EThing.Resource}
 * @returns {string}
 */
Resource.prototype.type = function() {
	return this._json.type;
}

/**
 *  Returns the types this resource depends on
 * @this {EThing.Resource}
 * @returns {string[]}
 */
Resource.prototype.types = function() {
	return this._json.extends || [];
}

/**
 *  Returns the type of this resource :
 *  - "File"
 *  - "Table"
 *  - "App"
 *  - "Device"
 * @this {EThing.Resource}
 * @returns {string}
 */
Resource.prototype.baseType = function() {
	t = this.types()
	return t[t.length - 1];
}

/**
 * Create time for this resource
 * @this {EThing.Resource}
 * @returns {Date}
 */
Resource.prototype.createdDate = function() {
	return new Date(this._json.createdDate);
}
Resource.prototype.ctime = function(){
	return this.createdDate();
}

/**
 * Last time this resource was modified
 * @this {EThing.Resource}
 * @returns {Date}
 */
Resource.prototype.modifiedDate = function() {
	return new Date(this._json.modifiedDate);
}
Resource.prototype.mtime = function(){
	return this.modifiedDate();
}

/**
 * Tells if this resource is publicly available.
 * @this {EThing.Resource}
 * @returns {boolean|string}
 */
Resource.prototype.public = function() {
	return this._json.public || false;
}

/**
 * Returns the data attached to this resource.
 * @param {string} [name] an optional data attribute name.
 * @param {} [defaultValue] a default value if the attribute was not found.
 * @this {EThing.Resource}
 * @returns {object|null}
 */
Resource.prototype.data = function(name, defaultValue) {
	if(typeof name == 'undefined')
		return this._json.data;
	else {
		return this._json.data.hasOwnProperty(name) ? this._json.data[name] : defaultValue;
	}
}

/**
 * Returns the attributes to this resource.
 * @param {string} [name] an optional attribute name.
 * @this {EThing.Resource}
 * @returns {object|null}
 */
Resource.prototype.attr = function(name) {
	if(typeof name == 'undefined')
		return this._json;
	else {
		return this._json.hasOwnProperty(name) ? this._json[name] : null;
	}
}

/**
 * Returns true if the attribute exists for this resource.
 * @param {string} name attribute name.
 * @this {EThing.Resource}
 * @returns {boolean}
 */
Resource.prototype.hasAttr = function(name) {
	return this._json.hasOwnProperty(name);
}

/**
 * Returns the description of this resource
 * @this {EThing.Resource}
 * @returns {string}
 */
Resource.prototype.description = function() {
	return this._json.description || "";
}

// resource modificators (async)
/**
 * Remove this resource.
 * @this {EThing.Resource}
 * @param {Boolean} [removeChildren] When true, the children are also removed. Default to false.
 * @param {function(data,XHR,options)} [callback] it is executed once the request is complete whether in failure or success
 * @returns {EThing.Resource} The instance on which this method was called.
 * @fires EThing#ething.resource.removed
 * @example
 * resource.remove().done(function(){
 *   // the resource was successfully removed
 * });
 */
Resource.prototype.remove = function(removeChildren, callback){
    var args = [].slice.call(arguments);
	return this.deferred(function(){
            args.unshift(this);
			return Resource.remove.apply(EThing, args);
		});
}

Resource.prototype.update = function(callback){
	return this.deferred(function(){
			return EThing.get(this, callback);
		});
}

/**
 * Update this resource attributes
 * @this {EThing.Resource}
 * @param {} properties
 * @param {function(data,XHR,options)} [callback] it is executed once the request is complete whether in failure or success
 * @returns {EThing.Resource} The instance on which this method was called.
 * @example
 * resource.set({
 *   name: "newName.txt"
 * }).done(function(){
 *   console.log("the resource was successfully renamed to :"+this.name());
 * });
 */
Resource.prototype.set = function(properties, callback){
	var args = [].slice.call(arguments);
	return this.deferred(function(){
			args.unshift(this);
			return Resource.set.apply(EThing, args);
		});
}
/**
 * Attaches persistant data to this resource
 * @this {EThing.Resource}
 * @param {object} data
 * @param {function(data,XHR,options)} [callback] it is executed once the request is complete whether in failure or success
 * @returns {EThing.Resource} The instance on which this method was called.
 * @example
 * resource.setData({
 *   "key": "value"
 * }).done(function(){
 *   // success
 * });
 * 
 * // you can also write :
 * resource.setData("key", "value").done(function(){
 *   // success
 * });
 */
Resource.prototype.setData = function(data, callback){
	
	if(typeof data === 'string' && typeof callback != 'function'){
		var key = data, value = callback, callback = arguments[2];
		data = {};
		data[key] = value;
	}
	
	return this.set({'data':data},callback);
}








/*
Resource,callback
*/
Resource.remove = function(a,removeChildren,callback)
{
	var context;
	if(a instanceof Resource){
		context = a;
		a = a.id();
	}
	else if(!utils.isId(a)) {
		throw "First argument must be a Resource object or a Resource id : "+a;
		return;
	}
	
	if(arguments.length==2 && typeof removeChildren === 'function'){
		callback = removeChildren;
		removeChildren = false;
	}
	
	return EThing.request({
		'url': '/resources/' + a + '?' + utils.param({'children':removeChildren}),
		'method': 'DELETE',
		'context': context
	},callback).done(function(){
		EThing.trigger('ething.resource.removed',[a]);
	});
};



/*
Resource,data,callback
*/
Resource.set = function(a,b,c){
	var context;
	
	if(!utils.isPlainObject(b) || !b){
		throw 'Second argument must be a unempty object !';
		return;
	}
	
	if(a instanceof Resource){
		context = a;
		a = a.id();
	}
	else if(!utils.isId(a)) {
		throw "First argument must be a Resource object or a Resource id : "+a;
		return;
	}
	
	var callback = c;
	
	return EThing.request({
		'url': '/resources/' + a,
		'dataType': 'json',
		'method': 'POST',
		'contentType': "application/json; charset=utf-8",
		'data': b,
		'context': context,
		'headers': {
			"X-HTTP-Method-Override": "PATCH"
		},
		'converter': EThing.resourceConverter
	},callback);
};







/*
* TOOLS
*/
Resource.dirname = function(f) {
	var s = f.replace(/\/[^\/]*\/?$/, '');
	return ( s === f ) ? "" : s;
}
Resource.basename = function(f) {
	return f.replace( /.*\//, '' );
}
Resource.extension = function(f){
	return f.indexOf('.')>=0 ? f.split('.').pop() : '';
}
Resource.fnmatch = function fnmatch(pattern, path) {
	
	var patternTab = pattern.split(' ');
	var parsedPattern, regexp;
	
	for(var i=0; i<patternTab.length; i++){
		if(patternTab[i] == '') continue;
		
		parsedPattern = '^' + patternTab[i].replace(/\//g, '\\/').
		replace(/\*\*/g, '(\\/[^\\/]+)*').
		replace(/\*/g, '[^\\/]+').
		replace(/((?!\\))\?/g, '$1.') + '$';
		
		parsedPattern = '^' + parsedPattern + '$';
		
		regexp = new RegExp(parsedPattern);
		if( path.match(regexp) != null ) return true;
	}
	return false;
};


EThing.Resource = Resource;

module.exports = Resource;
