
var utils = require("./utils.js");
var EventEngine = require("./eventEngine.js");
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
	EventEngine(this);

	this._json = {}
	this._fromJson(json, true);
}

// loader
Resource.prototype._fromJson = function(json, noTrigger){

	var updated = this._json.modifiedDate && json.modifiedDate && this._json.modifiedDate !== json.modifiedDate;
	var updatedKeys = [];

	if(!noTrigger && updated) {
		// list the kays that have been updated
		Object.keys(json).forEach(function(key){
			if((typeof this._json[key] !== 'undefined') && !utils.isEqual(json[key],this._json[key])){
				updatedKeys.push(key);
			}
		},this);
	}

	Object.assign(this._json, json);

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
	return this._json.extends.slice();
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
 * @param {string} [name] an optional attribute name. If none is given, an object with all the attributes is returned.
 * @this {EThing.Resource}
 * @returns {object|null}
 */
Resource.prototype.attr = function(name, defaultVal) {
	if(typeof name == 'undefined')
		return this._json;
	else {
        if(typeof defaultVal == 'undefined') defaultVal = null
		return this._json.hasOwnProperty(name) ? this._json[name] : defaultVal;
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
 * @param {function(data)} [callback] it is executed once the request is complete whether in failure or success
 * @returns {EThing.Resource} The instance on which this method was called.
 * @fires EThing#ething.resource.removed
 * @example
 * resource.remove().then(function(){
 *   // the resource was successfully removed
 * });
 */
Resource.prototype.remove = function(callback){
    var args = [].slice.call(arguments);
    args.unshift(this);
    return Resource.remove.apply(EThing, args);
}

Resource.prototype.update = function(callback){
    return EThing.get(this, callback);
}

/**
 * Update this resource attributes
 * @this {EThing.Resource}
 * @param {} properties
 * @param {function(data)} [callback] it is executed once the request is complete whether in failure or success
 * @returns {EThing.Resource} The instance on which this method was called.
 * @example
 * resource.set({
 *   name: "newName.txt"
 * }).then(function(){
 *   console.log("the resource was successfully renamed to :"+this.name());
 * });
 */
Resource.prototype.set = function(properties, callback){
	var args = [].slice.call(arguments);
    args.unshift(this);
    return Resource.set.apply(EThing, args);
}
/**
 * Attaches persistant data to this resource
 * @this {EThing.Resource}
 * @param {object} data
 * @param {function(data)} [callback] it is executed once the request is complete whether in failure or success
 * @returns {EThing.Resource} The instance on which this method was called.
 * @example
 * resource.setData({
 *   "key": "value"
 * }).then(function(){
 *   // success
 * });
 *
 * // you can also write :
 * resource.setData("key", "value").then(function(){
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

/**
 * Execute an operation on this resource.
 * @this {EThing.Resource}
 * @param {string} operationId
 * @param {object|array|anything} [data] the optional arguments required by the operation
 * @param {boolean} [binary] if true, return the content as ArrayBuffer, if false return the content as text. A string such as 'blob' or 'json' may also be passed.
 * @param {function(data)} [callback] it is executed once the request is complete whether in failure or success
 * @returns {EThing.Resource} The instance on which this method was called.
 * @example
 *
 * // if this resource is a switch :
 * resource.execute('setState', {
 * 	 state: true
 * });
 *
 * // you can also pass the arguments as an array :
 * resource.execute('setState', [true]);
 *
 * // or as is :
 * resource.execute('setState', true);
 *
 */
Resource.prototype.execute = function(){
	var args = [].slice.call(arguments);
    args.unshift(this);
    return Resource.execute.apply(EThing, args);
}

/**
 * Returns an url for executing an operation.
 * @this {EThing.Resource}
 * @param {string} operationId
 * @param {object} [data] the optional data required by the operation
 * @returns {string} The url.
 * @example
 *
 * var image = new Image();
 * image.src = resource.executeUrl('getImage');
 * document.body.appendChild(image);
 *
 */
Resource.prototype.executeUrl = function(operationId, data){
	var url = 'resources/'+this.id()+'/call/'+operationId;

	if(utils.isPlainObject(data) && Object.keys(data).length !== 0){
		url += '?' + utils.param(data);
	}

	return EThing.toApiUrl(url,true);
}


/**
 * Creates a new Resource
 *
 * @method EThing.Resource.create
 * @param {object} attributes
 * @param {function(data)} [callback] it is executed once the request is complete whether in failure or success
 * @returns {Promise}
 * @fires EThing#ething.resource.created
 * @example
 * EThing.Resource.create({
 *   type: "resources/File",
 *   name: "foobar"
 * }).then(function(resource){
 *     console.log('created : ' + resource.name());
 * })
 */
Resource.create = function(a,callback){
	if(typeof a.type == 'undefined') {
		throw "type attribute is mandatory !";
	}

	return EThing.request({
		'url': '/resources',
		'dataType': 'json',
		'method': 'POST',
		'contentType': "application/json; charset=utf-8",
		'data': a,
		'converter': EThing.resourceConverter
	},callback).then(function(r){
		EThing.trigger('ething.resource.created',[r]);
    return r
	});

};



/*
Resource,callback
*/
Resource.remove = function(a,callback)
{
	var context;
	if(a instanceof Resource){
		context = a;
		a = a.id();
	}
	else if(!utils.isId(a)) {
		throw "First argument must be a Resource object or a Resource id : "+a;
	}

	return EThing.request({
		'url': '/resources/' + a,
		'method': 'DELETE',
		'context': context
	},callback).then(function(){
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
resource, operationId[, data ]
*/
Resource.execute = function(resource, operationId, data, binary, callback){

	var context;

	if(resource instanceof Resource){
		context = resource;
		resource = resource.id();
	}
	else if(utils.isId(resource))
		resource = resource;
	else {
		throw "First argument must be a Resource object or a Resource id !";
		return;
	}

	if(arguments.length == 4){

		if(typeof binary == 'function'){
			callback = binary;
			binary = undefined;
		}

	} else if(arguments.length == 3){

		if(typeof data == 'function'){
			callback = data;
			data = undefined;
		}

	}

	return EThing.request({
		'url': '/resources/' + resource + '/call/' + operationId,
		'method': 'POST',
		'contentType': "application/json; charset=utf-8",
		'data': typeof data != 'undefined' && data!==null ? JSON.stringify(data) : undefined,
		'dataType': binary ? (typeof binary === 'string' ? binary : 'arraybuffer') : 'text',
		'context': context
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
