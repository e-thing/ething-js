var EThing = require("./core.js");
var utils = require("./utils.js");
var EventEngine = require("./eventEngine.js");



/**
 * Constructs a Plugin instance from an object decribing a plugin. Should not be called directly.
 * @protected
 * @class The Plugin
 * @memberof EThing
 * @param {object} json
 */
var Plugin = function(json)
{
	EventEngine(this);

	this._json = {};
	this._fromJson(json, true);
}

// loader
Plugin.prototype._fromJson = function(json, noTrigger){

	var updatedKeys = [];

	if(!noTrigger && updated) {
		// list the kays that have been updated
		Object.keys(json).forEach(function(key){
			if((typeof this._json[key] !== 'undefined') && !utils.isEqual(json[key],this._json[key])){
				updatedKeys.push(key);
			}
		},this);
	}

	var updated = updatedKeys.length>0;

	Object.assign(this._json, json);

	if(!noTrigger && updated) {
		//console.log('plugin updated '+this.name());
		this.trigger('updated', [updatedKeys]);
		EThing.trigger('ething.plugin.updated',[this, updatedKeys]);
	}

	return updated;
}

/**
 *  Returns the name of this plugin :
 * @this {EThing.Plugin}
 * @returns {string}
 */
Plugin.prototype.name = function() {
	return this._json.name;
}

/**
 *  Returns the type of this plugin :
 * @this {EThing.Plugin}
 * @returns {string}
 */
Plugin.prototype.type = function() {
	return this._json.type;
}


/**
 * Returns the attributes to this plugin.
 * @param {string} [name] an optional attribute name. If none is given, an object with all the attributes is returned.
 * @this {EThing.Plugin}
 * @returns {object|null}
 */
Plugin.prototype.attr = function(name, defaultVal) {
	if(typeof name == 'undefined')
		return this._json;
	else {
        if(typeof defaultVal == 'undefined') defaultVal = null
		return this._json.hasOwnProperty(name) ? this._json[name] : defaultVal;
	}
}


/**
 * Execute an operation on this plugin. Same as for Resource.
 * @this {EThing.Plugin}
 * @param {string} operationId
 * @param {object|array|anything} [data] the optional arguments required by the operation
 * @param {boolean} [binary] if true, return the content as ArrayBuffer, if false return the content as text. A string such as 'blob' or 'json' may also be passed.
 * @param {function(data)} [callback] it is executed once the request is complete whether in failure or success
 * @returns {EThing.plugin} The instance on which this method was called.
 */
Plugin.prototype.execute = function(){
	var args = [].slice.call(arguments);
    args.unshift(this);
    return Plugin.execute.apply(EThing, args);
}

/**
 * Returns an url for executing an operation.
 * @this {EThing.Plugin}
 * @param {string} operationId
 * @param {object} [data] the optional data required by the operation
 * @returns {string} The url.
 */
Plugin.prototype.executeUrl = function(operationId, data){
	var url = 'plugins/'+this.id()+'/call/'+operationId;

	if(utils.isPlainObject(data) && Object.keys(data).length !== 0){
		url += '?' + utils.param(data);
	}

	return EThing.toApiUrl(url,true);
}

/**
 * Update this plugin attributes
 * @this {EThing.Plugin}
 * @param {} properties
 * @param {function(data)} [callback] it is executed once the request is complete whether in failure or success
 * @returns {EThing.Plugin} The instance on which this method was called.
 */
Plugin.prototype.set = function(properties, callback){
	var args = [].slice.call(arguments);
    args.unshift(this);
    return Plugin.set.apply(EThing, args);
}


Plugin.list = function(callback){
	return EThing.request({
		'url': '/plugins',
		'method': 'GET',
		'dataType': 'json',
		'converter': Plugin._updateFromJson
	},callback);

};

/*
Plugin,data,callback
*/
Plugin.set = function(a,b,c){
	var context;

	if(!utils.isPlainObject(b) || !b){
		throw 'Second argument must be a unempty object !';
		return;
	}

	if(a instanceof Plugin){
		context = a;
		a = a.name();
	}
	else if(typeof a != 'string') {
		throw "First argument must be a Plugin object or a Plugin name : "+a;
		return;
	}

	var callback = c;

	return EThing.request({
		'url': '/plugins/' + a,
		'dataType': 'json',
		'method': 'POST',
		'contentType': "application/json; charset=utf-8",
		'data': b,
		'context': context,
		'headers': {
			"X-HTTP-Method-Override": "PATCH"
		},
		'converter': Plugin._updateFromJson
	},callback);
};



/*
plugin, operationId[, data ]
*/
Plugin.execute = function(plugin, operationId, data, binary, callback){

	var context;

	if(plugin instanceof Plugin){
		context = plugin;
		plugin = plugin.name();
	}
	else if(typeof plugin != 'string')
		plugin = plugin;
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
		'url': '/plugins/' + plugin + '/call/' + operationId,
		'method': 'POST',
		'contentType': "application/json; charset=utf-8",
		'data': typeof data != 'undefined' && data!==null ? JSON.stringify(data) : undefined,
		'dataType': binary ? (typeof binary === 'string' ? binary : 'arraybuffer') : 'text',
		'context': context
	},callback);

};

Plugin.plugins = {};

Plugin._updateFromJson = function (data) {
	if(typeof data == 'object' && data !== null){

		var isArray = Array.isArray(data);
		if(!isArray) data = [data];

		// convert into resource instance
		data = data.map(function(jsondata){

			var pluginName = jsondata.name;
			var plugin = Plugin.plugins[pluginName];

			if (plugin) {
				// update
				plugin._fromJson(jsondata);
			} else {
				plugin = new Plugin(jsondata);
				Plugin.plugins[pluginName] = plugin;
			}

			return plugin;
		});

		if(!isArray) data = data.length ? data[0] : null;
	}

	return data;
}


EThing.Plugin = Plugin;

module.exports = Plugin;
