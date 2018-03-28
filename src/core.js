
var utils = require("./utils.js");
var Deferred = require("./deferred.js");
var Error = require("./error.js");
var Event = require("./event.js");
var EventEngine = require("./eventEngine.js");
var DeferredObject = require("./deferredObject.js");


/**
 * Contains all eThing API classes and functions.
 * @namespace EThing
 */
var EThing = {};


var extend = utils.extend;
var isPlainObject = utils.isPlainObject;

var XMLHttpRequest = utils.XMLHttpRequest;


EThing.Event = Event;
EThing.Error = Error;

EThing.utils = utils;
EThing.utils.Deferred = Deferred;

EThing.DeferredObject = DeferredObject;

EThing.config = {
	serverUrl: 'http://localhost:8000'
};


var ajaxSuccessHandlers = [],
	ajaxCompleteHandlers = [],
	ajaxErrorHandlers = [],
	ajaxSendHandlers = [],
	apiRequestPrefilterHandler = null;





/**
 * register an handler to an event.
 * @name on
 * @memberof EThing
 * @param {string} event event type string. Multiple space separated events can be given.
 * @param {function(EThing.Event)} handler the function to be called when the event has been triggered.
 */

/**
 * Remove an event handler.
 * @name off
 * @memberof EThing
 * @param {string} event event type string. Multiple space separated events can be given.
 * @param {function(EThing.Event)} [handler] A handler function previously attached for the event(s)
 */

/**
 * register an handler to an event. The handler will be only executed once.
 * @name one
 * @memberof EThing
 * @param {string} event event type string. Multiple space separated events can be given.
 * @param {function(EThing.Event)} handler the function to be called when the event has been triggered.
 */

/**
 * Execute all handlers attached for the given event type.
 * @name trigger
 * @memberof EThing
 * @param {string|EThing.Event} event An event object instance or an event type string.
 * @param {object} [extraParameters] Additional parameters to pass along to the event handler.
 */


/**
 * @memberof EThing
 * @event "ething.resource.removed"
 */
 
/**
 * @memberof EThing
 * @event "ething.file.created"
 */
 
/**
 * @memberof EThing
 * @event "ething.table.created"
 */
 
/**
 * @memberof EThing
 * @event "ething.device.created"
 */
 
/**
 * @memberof EThing
 * @event "ething.app.created"
 */
/**
 * authenticated event.
 *
 * @memberof EThing
 * @event "ething.authenticated"
 */
EventEngine(EThing);



// only absolute url will be preserved untouched,
// else api server url is prepended
EThing.toApiUrl = function(url, auth){
	url = url || '';
	
	if(!/^([a-z]+:)?\/\//.test(url)){
		// relative url
		if(!/^\//.test(url) && url)
			url = '/'+url;
		
		url = apiUrl() + url;
	}
	
	if(auth && isApiUrl(url)){
		url = _processAuth(url);
		if(typeof apiRequestPrefilterHandler == 'function')
			url = apiRequestPrefilterHandler(url);
	}
	return url;
}

// returns true if it is an URL to the HTTP API
var isApiUrl = function(url){
	return (new RegExp('^([a-z]+:)?//'+apiUrl().replace(/^([a-z]+:)?\/\//,''))).test(url);
}


var apiUrl = function(){
	return EThing.config.serverUrl.replace(/\/+$/, '') + '/api';
}

EThing.apiUrl = function(){
	return EThing.toApiUrl();
}



var ajax = function(options){
	var deferred = new Deferred(),
		xhr = new XMLHttpRequest();
	
	if(typeof options == 'string')
		options = {
			url: options
		};
	
	options = extend({
		method: 'GET',
		context: null,
		url: null,
		data: null,
		contentType: null, // When sending data to the server, use this content type , default to 'application/x-www-form-urlencoded; charset=UTF-8'
		headers: null,
		dataType: null, // The type of data that you're expecting back from the server (json -> {object}, text -> {string} , arraybuffer, blob -> (not available on nodejs), buffer (nodejs only) )
		converter: null, // a user defined function to convert the receive data into something else ...
		synchronous: false
	},options);
	
	
	if(typeof options.url != 'string')
		return null;
	
	var url = EThing.toApiUrl(options.url);
	var apiRequest = isApiUrl(url);
	
	
	options.method = options.method.toUpperCase();
	
	var context = options.context || EThing;
	
	var isBodyRequest = !/^(?:GET|HEAD)$/.test( options.method ),
		body = undefined,
		hasData = typeof options.data != 'undefined' && options.data !== null;
	
	
	
	// If data is available, append data to url
	if ( !isBodyRequest && hasData ){
		// GET, HEAD request, append the data to the query string
		url += ( /\?/.test( url ) ? "&" : "?" ) + ( typeof options.data == 'string' ? options.data : utils.param(options.data));
	}
	
	
	xhr.open(options.method, url, !options.synchronous);
	
	
	// user headers
	var requestContentType = null;
	if(isPlainObject(options.headers)){
		for(var i in options.headers){
			if(options.headers.hasOwnProperty(i)){
				if(/^content-type$/i.test(i)){
					requestContentType = options.headers[i];
				}
				xhr.setRequestHeader(i, options.headers[i]);	
			}
		}
	}
	
	// content-type header
	if(!requestContentType && options.contentType)
		xhr.setRequestHeader('Content-Type', requestContentType = options.contentType);
	
	if(isBodyRequest && hasData){
		
		if(requestContentType){
			
			body = options.data;
			
			if(isPlainObject(options.data) || Array.isArray(options.data)){
				// transform the data according to the content-type
				if(/json/i.test(requestContentType))
					body = JSON.stringify(options.data)
				else if(/application\/x-www-form-urlencoded/i.test(requestContentType))
					body = utils.param(options.data);
			}
			
		} else {
			// no content-type set, set to defaults
			if(options.data instanceof Blob){
				xhr.setRequestHeader('Content-Type', requestContentType = options.data.type);
				body = options.data;
			} else if( (options.data instanceof ArrayBuffer) || (options.data instanceof utils.Buffer) ){
				xhr.setRequestHeader('Content-Type', requestContentType = 'application/octet-stream');
				body = options.data;
			} else {
				xhr.setRequestHeader('Content-Type', requestContentType = 'application/x-www-form-urlencoded; charset=UTF-8');
				body = typeof options.data == 'string' ? options.data : utils.param(options.data);
			}
		}
		
	}
	
	
	
	// authentication
	if(apiRequest){
		xhr = _processAuth(xhr);
		if(typeof apiRequestPrefilterHandler == 'function')
			xhr = apiRequestPrefilterHandler(xhr);
	}
	
	// responseType
	var dataType = options.dataType;
	if(dataType && dataType != 'auto') xhr.responseType = dataType;
	
	function reject(error){
		
		var ct = xhr.getResponseHeader("Content-Type") || '',
			data = null;
		
		if(typeof error != 'undefined'){
			data = error;
		}
		else if(/json/.test(ct) || /text\/plain/.test(ct)){
			
			
			switch(xhr.responseType){
				
				case '':
				case 'text':
				case 'json':
					data = xhr.response;
					break;
				case 'blob':
					
					if(options.synchronous){
						
						if(!utils.FileReaderSync){
							throw new Error("FileReaderSync not supported.");
						}
						
						var fileReader = new utils.FileReaderSync();
						data = String.fromCharCode.apply(null, new Uint8Array(fileReader.readAsArrayBuffer(xhr.response)));
					} else {
						data = Deferred();
						
						if(!utils.FileReader){
							throw new Error("FileReaderSync not supported.");
						}
						
						var fileReader = new utils.FileReader();
						fileReader.onload = function() {
							data.resolve( String.fromCharCode.apply(null, new Uint8Array(this.result)) );
						};
						fileReader.readAsArrayBuffer(xhr.response);
					}
					
					break;
				case 'arraybuffer':
					data = String.fromCharCode.apply(null, new Uint8Array(xhr.response));
					break;
				case 'buffer':
					data = xhr.response.toString("utf8");
					break;
				default:
					throw new Error(xhr.responseType+" response type not supported.");
					break;
			}
			
		}
		
		Deferred.when(data).always(function(data){
			
			try{
				data = JSON.parse(data);
			} catch(e){}
			
			var error = new Error(data || (xhr.status ? (xhr.status+' ['+xhr.statusText+']') : 'unknown error')),
				args = [error,xhr,options];
			
			EThing.trigger('ething.request.error',args);
			ajaxErrorHandlers.forEach(function(handler){
				handler.apply(context,args);
			});
			EThing.trigger('ething.request.complete',args);
			ajaxCompleteHandlers.forEach(function(handler){
				handler.apply(context,args);
			});
			deferred.rejectWith(context,args);
			
		});
		
		
	}
	
	function resolve(data){
		var args = [data,xhr,options];
		
		EThing.trigger('ething.request.success',args);
		ajaxSuccessHandlers.forEach(function(handler){
			handler.apply(context,args);
		});
		EThing.trigger('ething.request.complete',args);
		ajaxCompleteHandlers.forEach(function(handler){
			handler.apply(context,args);
		});
		deferred.resolveWith(context,args);
	}
	
	// events
	xhr.onload=function(){
		var success = xhr.status >= 200 && xhr.status < 300 || xhr.status === 304;
		if (success) {  
			// success
			var data = xhr.response;
			
			if(dataType == 'auto'){
				if(/json/.test(xhr.getResponseHeader("Content-Type") || '')){
					try {
						data = JSON.parse(data);
					} catch(err){}
				}
			} else if(dataType == 'json' && typeof data === 'string'){ // for ie compatibility
				try {
					data = JSON.parse(data);
				} catch(err){}
			}
			
			if(typeof options.converter == 'function'){
				data = options.converter.call(context,data,xhr,options);
			}
			
			resolve(data);
		}
		else
			reject();
	}
	xhr.onerror=function(err){reject(err);};
	xhr.onabort=function(){reject();};
	xhr.onprogress=function(e){
		deferred.notifyWith(context,[e,xhr,options]);
	}
	
	var evt = Event('ething.request.send');
	EThing.trigger(evt,[xhr, options]);
	
	if(evt.isDefaultPrevented()){
		reject('Aborded');
	}
	else {
	
		ajaxSendHandlers.forEach(function(handler){
			handler.call(context,xhr);
		});
		
		xhr.send(body);
		
	}
	
	return deferred.promise();
}





function isResourceMetaData(json){
	return json.hasOwnProperty('id') && json.hasOwnProperty('type') && json.hasOwnProperty('name');
}

var getClass = EThing.getClass = function (str){
	var cc = str.split(/[.\\]/), obj = EThing;
	if(cc.length>0 && (typeof EThing[cc[0]] != 'undefined')){
		return EThing[cc[0]];
	}
	return undefined;
}

var instanciate = EThing.instanciate = function (json){
	var cl = getClass(json.type);
	if(!cl){
		if(json.extends.indexOf('Device') >= 0)
			cl = getClass('Device')
	}
	return cl ? new (cl)(json) : false;
}





// if the argument is a json object describing a resource, then it converts it into a Resource instance, else it returns the object unchanged
EThing.resourceConverter = function(data){
	
	if(typeof data == 'object' && data !== null){
		
		var isArray = Array.isArray(data);
		if(!isArray) data = [data];
		
		// convert into resource instance
		data = data.map(function(r){
			return EThing.instanciate(r);
		}).filter(function(r){
			return r;
		});
		
		
		// update the arbo collection with the new properties
		// and return the corresponding resource object(s)
		if(EThing.arbo)
			data = EThing.arbo.update(data).resources;
		
		if(!isArray) data = data.length ? data[0] : null;
	}
	
	return data;
}




/**
 * Make a HTTP request. The options object contains the following properties :
 *  - url {string} __required__ The url of the request. The API url will be prepended to relative URLs.
 *  - method {string} The HTTP request method to use. Default is GET.
 *  - data {string|object|Blob|ArrayBuffer|Buffer} The query string for GET request. The HTTP request body for POST|PATCH|PUT requests. If an object is given, it will be serialized into a query string.
 *  - contentType {string} When sending data to the server, use this content type. Default is 'application/octet-stream' if the data is an instance of ArrayBuffer or Buffer, if data is an instance of Blob, the default will be the type of the data itself, else 'application/x-www-form-urlencoded; charset=UTF-8'.
 *  - dataType {string} The type of data that you're expecting back from the server. See {@link http://xhr.spec.whatwg.org/#the-responsetype-attribute|XMLHttpRequest standard}.
 *  - headers {object} Additional HTTP request headers.
 *  - context {object} The value of this provided for the call of the callbacks
 *  - converter {function(data,XHR)} A function that returns the transformed value of the response
 *
 * 
 * You may also give a callback as a second parameter. This callback is executed when the request is complete whether in failure or success.
 * On success, it receives the returned request data, as well as the XMLHttpRequest object.
 * On failure, the first parameter will be a Error object describing the error.
 * To check if a request is in failure :
 * <pre><code>EThing.request(options,function(data,xhr){
 *     if(data instanceof EThing.Error){
 *       // an error occurs, print the associated message
 *       console.log(data.message);
 *     }
 *   })`
 * </code></pre>
 *
 *
 * This function returns a {@link http://api.jquery.com/category/deferred-object/|jQuery like Promise object} object.
 *
 * The done|fail|always functions take the same parameters than the {@link http://api.jquery.com/category/deferred-object/|jQuery version}.
 *
 *
 *
 * @method EThing.request
 * @param {string|object} options a set of key/value pairs that configure the request. If an URL is given, a GET request with the default options is made.
 * @param {function(data,XHR,options)} [callback] it is executed once the request is complete whether in failure or success
 * @returns {Deferred} a {@link http://api.jquery.com/category/deferred-object/|jQuery like Promise object}
 * @example
 * // GET request
 * EThing.request('/resources') // is equivalent to EThing.list()
 *
 * // pass an object to make more complex request
 * // store some data in a file
 * EThing.request({
 *   url: '/files/'+fileId,
 *   method: 'PUT',
 *   data: 'some content here ...',
 *   contentType: 'text/plain'
 * })
 * .done(function(file){
 *   console.log("the content was stored in the file "+file.name());
 * })
 * .fail(function(error){
 *   console.log("an error occurs : "+error.message);
 * });
 */
// opt : same as ajax options or an url
EThing.request = function(opt,callback){
	var d = ajax(opt);
	
	if(typeof callback == 'function') {
		d.always(function(){
			callback.apply(this,Array.prototype.slice.call(arguments));
		});
	}
	
	// if sync return the result instead of the deferred object !
	if(opt.synchronous){
		var result = null;
		d.always(function(r){
			result = r;
		});
		return result;
	} else {
		return d;
	}
}


/**
*
*/
EThing.apiRequestPrefilter = function(handler){
	apiRequestPrefilterHandler = handler;
}
/**
 * Register a handler to be called just before API requests is sent.
 *
 * @method EThing.ajaxSend
 * @param {function(XHR)} handler The function to be invoked.
 */
EThing.ajaxSend = function(handler){
	if(typeof handler == 'function'){
		ajaxSendHandlers.push(handler);
	}
}
/**
 * Register a handler to be called when API requests complete.
 *
 * @method EThing.ajaxComplete
 * @param {function(data,XHR,options)} handler The function to be invoked.
 */
EThing.ajaxComplete = function(handler){
	if(typeof handler == 'function'){
		ajaxCompleteHandlers.push(handler);
	}
}
/**
 * Register a handler to be called when API requests complete successfully.
 *
 * @method EThing.ajaxSuccess
 * @param {function(data,XHR,options)} handler The function to be invoked.
 */
EThing.ajaxSuccess = function(handler){
	if(typeof handler == 'function'){
		ajaxSuccessHandlers.push(handler);
	}
}
/**
 * Register a handler to be called when API requests complete with an error.
 *
 * @method EThing.ajaxError
 * @param {function(data,XHR,options)} handler The function to be invoked.
 */
EThing.ajaxError = function(handler){
	if(typeof handler == 'function'){
		ajaxErrorHandlers.push(handler);
	}
}






/**
 * This function get the available resources. A filter may be given to retrieve resources with specific attributes (see the HTTP API for more details).
 * @method EThing.list
 * @param {string} [query] Query string for searching resources
 * @param {function(data,XHR,options)} [callback] it is executed once the request is complete whether in failure or success
 * @returns {Deferred} a {@link http://api.jquery.com/category/deferred-object/|jQuery like Promise object}. {@link EThing.request|More ...} 
 * @example
 * // get all the resources
 * EThing.list().done(function(resources){
 *     console.log(resources);
 * })
 *
 * // get only File & Table resources
 * EThing.list('type == "File" or type == "Table"').done(function(resources){
 *     console.log(resources);
 * })
 */
EThing.list = EThing.find = function(a,b)
{
	var query = null, callback = null;
	
	if(arguments.length==1){
		if(typeof arguments[0] == 'function')
			callback = arguments[0];
		else
			query = arguments[0];
	}
	else if(arguments.length>=2){
		query = arguments[0];
		callback = arguments[1];
	}
	
	return EThing.request({
		'url': '/resources?' + utils.param({'q':query}),
		'method': 'GET',
		'dataType': 'json',
		'converter': EThing.resourceConverter
	},callback);
};


/**
 * Gets a resource by its id.
 *
 * @method EThing.get
 * @param {string|EThing.Resource} resourceIdentifier
 * @param {function(data,XHR,options)} [callback] it is executed once the request is complete whether in failure or success
 * @returns {Deferred} a {@link http://api.jquery.com/category/deferred-object/|jQuery like Promise object}. {@link EThing.request|More ...} 
 * @example
 * // get a resource by its id
 * EThing.get("54516eb").done(function(resource){
 *     console.log('the name is ' + resource.name());
 * })
 */
EThing.get = function(a,b)
{
	var context;
	if(a instanceof EThing.Resource){
		context = a;
		a = a.id();
	}
	else if(!utils.isId(a)) {
		throw "First argument must be a Resource object or a Resource id : "+a;
		return;
	}
	
	var callback = b;
	
	return EThing.request({
		'url': '/resources/' + a,
		'dataType': 'json',
		'method': 'GET',
		'context': context,
		'converter': EThing.resourceConverter
	},callback);
};


/**
 * Gets an object containing informations about space usage :
 *  - used {number} the amount of space used in bytes
 *  - quota_size {number} the maximum space authorized in bytes
 *
 * @method EThing.usage
 * @param {function(data,XHR,options)} [callback] it is executed once the request is complete whether in failure or success
 * @returns {Deferred} a {@link http://api.jquery.com/category/deferred-object/|jQuery like Promise object}. {@link EThing.request|More ...} 
 * @example
 * // get the occupied space :
 * EThing.usage().done(function(usage){
 *     console.log('space used : ' + (100 * usage.used / usage.quota_size) );
 * })
 */
EThing.usage = function(a)
{
	var callback = a;
	
	return EThing.request({
		'url': '/usage',
		'dataType': 'json',
		'method': 'GET'
	},callback);
};









/*
 * AUTH
 */

var NoAuth = function(a){ return a; };


// private
var _resource = null,
	_scope = null,
	_authType = null,
	_processAuth = NoAuth; // function(xhr|url) -> return xhr|url



/**
 * @namespace EThing.auth
 */

EThing.auth = {};



/**
 * Returns true if the authentication process has been successful.
 * @method EThing.auth.isAuthenticated
 * @returns {boolean}
 */
EThing.auth.isAuthenticated = function(){
	return !!_authType;
}

/**
 * Returns the authenticated app. Only available with app's apikey authentication.
 * @method EThing.auth.getApp
 * @returns {EThing.App} the authenticated app or null.
 */
EThing.auth.getApp = function(){
	return _resource instanceof EThing.App ? _resource : null;
}

/**
 * Returns the authenticated app. Only available with devices's apikey authentication.
 * @method EThing.auth.getDevice
 * @returns {EThing.Device} the authenticated device or null.
 */
EThing.auth.getDevice = function(){
	return _resource instanceof EThing.Device ? _resource : null;
}

/**
 * Returns the authenticated resource. Only available with apikey authentication.
 * @method EThing.auth.getResource
 * @returns {EThing.Resource} the authenticated resource or null.
 */
EThing.auth.getResource = function(){
	return _resource;
}

/**
 * Returns the scope of the current authentication
 * @method EThing.auth.getScope
 * @returns {string} the scope. May be an empty string if no permissions is set. May be null if full permissions.
 */
EThing.auth.getScope = function(){
	return _scope;
}



/**
 * Reset authentication. You must restart an authentication process to make API calls again.
 * @method EThing.auth.reset
 */
EThing.auth.reset = function(){
	_resource = null;
	_authType = null;
	_scope = null;
	_processAuth = NoAuth;
}




EThing.auth.setApiKey = function(apiKey){
	
	EThing.auth.reset();
	
	_processAuth = function(xhrOrUrl){
		
		if(typeof xhrOrUrl == 'string')
			xhrOrUrl = EThing.utils.insertParam(xhrOrUrl, 'api_key', apiKey);
		else 
			xhrOrUrl.setRequestHeader('X-API-KEY', apiKey);
		
		return xhrOrUrl;
	};
	
};

EThing.auth.setBasicAuth = function(login, password){
	
	EThing.auth.reset();
	
	_processAuth = function(xhrOrUrl){
		
		if(typeof xhrOrUrl == 'string')
			xhrOrUrl = xhrOrUrl.replace(/\/\/([^:]+:[^@]+@)?/, '//'+login+':'+password+'@');
		else 
			xhrOrUrl.setRequestHeader("Authorization", "Basic " + utils.btoa(login + ":" + password));
		
		return xhrOrUrl;
	};
};




/**
 * Initialize the eThing library.
 *
 * @method EThing.initialize
 * @param {Object} options
 * @param {number} options.serverUrl The URL of your eThing server (e.g. http://hostname:8000 ).
 * @param {number} [options.apiKey] Authenticate with an API key.
 * @param {number} [options.login] Basic Authentication login (Should be used only server side i.e. NodeJS).
 * @param {number} [options.password] Basic Authentication password (Should be used only server side i.e. NodeJS).
 * @param {function(EThing.Error)} [errorFn] it is executed on authentication error.
 * @returns {Deferred} a {@link http://api.jquery.com/category/deferred-object/|jQuery like Promise object}
 * @fires EThing#ething.authenticated
 * @example
 *
 * EThing.initialize({
 *    serverUrl: 'http://hostname:8000',
 *    apiKey: 'a4e28b3c-1f05-4a62-95f7-c12453b66b3c'
 *  }, function(){
 *    // on authentication success
 *    alert('connected !');
 *  }, function(error) {
 *    // on authentication error
 *    alert(error.message);
 *  });
 *
 */
EThing.initialize = function(options, successFn, errorFn){
	
	EThing.auth.reset();
	
	options = extend({
		serverUrl: null,
		// auth apikey
		apiKey: null,
		// auth basic
		login: 'ething',
		password:null
	},options || {});
	
	if(options.serverUrl)
		EThing.config.serverUrl = options.serverUrl;
	
	
	if(options.apiKey)
		EThing.auth.setApiKey(options.apiKey);
	else if(options.login && options.password)
		EThing.auth.setBasicAuth(options.login, options.password);
	
	return EThing.request({
		'url': '/auth',
		'dataType': 'json',
		'context': EThing,
		'converter': function(data){
			_authType = data.type;
			if(data.resource)
				_resource = EThing.instanciate(data.resource);
			if(data.scope)
				_scope = data.scope;
		}
	}).done(function(){
		
		authenticatedCb_.forEach(function(cb){
			cb.call(EThing);
		});
		
		EThing.trigger('ething.authenticated');
	}).done(successFn).fail(errorFn);
	
}


/**
 * Register a handler to be executed once the authentication is complete.
 *
 * @method EThing.authenticated
 * @param {function()} callback it is executed on authentication success.
 *
 */
var authenticatedCb_ = [];
EThing.authenticated = function(callback){
	
	if(typeof callback == 'function'){
		authenticatedCb_.push(callback);
		
		if(EThing.auth.isAuthenticated()){
			callback.call(EThing);
		}
	}
}

module.exports = EThing;

