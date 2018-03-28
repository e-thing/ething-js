	
var EThing = require("./core.js");
var utils = require("./utils.js");



/*
* Settings
*/

var settings = {};

/**
 * Retrieve the settings.
 * @memberof EThing.settings
 * @this {EThing.settings}
 * @param {function(data,XHR,options)} [callback] it is executed once the request is complete whether in failure or success
 * @returns {Deferred} a {@link http://api.jquery.com/category/deferred-object/|jQuery like Promise object}. {@link EThing.request|More ...} 
 */

settings.get = function(callback){
	return EThing.request({
		'url': '/settings',
		'dataType': 'json',
		'method': 'GET'
	},callback);
};

/**
 * Update the settings.
 * @memberof EThing.settings
 * @this {EThing.settings}
 * @param {object} [data] updated settings object
 * @param {function(data,XHR,options)} [callback] it is executed once the request is complete whether in failure or success
 * @returns {Deferred} a {@link http://api.jquery.com/category/deferred-object/|jQuery like Promise object}. {@link EThing.request|More ...} 
 */
settings.set = function(data, callback){
	
	if(!utils.isPlainObject(data))
		throw "First argument must be an object !";
	
	
	return EThing.request({
		'url': '/settings',
		'dataType': 'json',
		'method': 'POST',
		'contentType': "application/json; charset=utf-8",
		'data': data,
		'headers': {
			"X-HTTP-Method-Override": "PATCH"
		}
	},callback);
};

EThing.settings = settings;

module.exports = settings;


