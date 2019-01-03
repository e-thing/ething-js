
var utils = require("./utils.js");
var Event = require("./event.js");
var EventEngine = require("./eventEngine.js");
var axios = require('axios');


/**
 * Contains all eThing API classes and functions.
 * @namespace EThing
 */
var EThing = {};


var extend = utils.extend;
var isPlainObject = utils.isPlainObject;


EThing.Event = Event;

EThing.utils = utils;

EThing.axios = axios.create({});



EThing.config = {
	serverUrl: 'http://localhost:8000'
};





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
		url = this.auth.instance().setUrl(url);
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



var instanciate = EThing.instanciate = function (json){
    
    for(var i in json.extends){
        var clsName = json.extends[i].split('/').pop();
        
        if(typeof EThing[clsName] != 'undefined'){
            return new EThing[clsName](json)
        }
        
    }
    
    console.warn('unknown type: ' + json.type)
    
    return new EThing.Resource(json);
    
	//return false;
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
 *  - dataType {string} The type of data that you're expecting back from the server: 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
 *  - headers {object} Additional HTTP request headers.
 *  - context {object} The value of this provided for the call of the callback
 *  - converter {function(data,XHR)} A function that returns the transformed value of the response
 *
 * 
 * You may also give a callback as a second parameter. This callback is executed when the request is complete whether in failure or success.
 * On success, it receives the returned request data, as well as the XMLHttpRequest object.
 * On failure, the first parameter will be a Error object describing the error.
 * To check if a request is in failure :
 * <pre><code>EThing.request(options,function(data,error){
 *     if(error){
 *       // an error occurs, print the associated message
 *       console.log(error);
 *     }
 *   })`
 * </code></pre>
 *
 *
 * This function returns a {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise Promise} object.
 *
 *
 *
 * @method EThing.request
 * @param {string|object} options a set of key/value pairs that configure the request. If an URL is given, a GET request with the default options is made.
 * @param {function(data,error)} [callback] it is executed once the request is complete whether in failure or success
 * @returns {Promise}
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
 * .then(function(file){
 *   console.log("the content was stored in the file "+file.name());
 * })
 * .catch(function(error){
 *   console.log("an error occurs : "+error);
 * });
 */
// opt : same as ajax options or an url
EThing.request = function(opt,callback){
    var self = this;
    
    if(typeof opt == 'string')
		opt = {
			url: opt
		};
	
	var options = Object.assign({
		method: 'GET',
		context: this,
		url: null,
		data: null,
		contentType: null, // When sending data to the server, use this content type
		headers: null,
		dataType: 'json', // The type of data that you're expecting back from the server (json -> {object}, text -> {string} , arraybuffer, blob -> (not available on nodejs), buffer (nodejs only) )
		converter: null, // a user defined function to convert the receive data into something else ...
        params: {}
	},opt);
	
    this.auth.instance().set(options);
    
    if (options.contentType) {
        options.headers = options.headers || {}
        options.headers['content-type'] = options.contentType
    }
    
    return this.axios.request({
        url: options.url,
        baseURL: this.apiUrl(),
        method: options.method.toLowerCase(),
        params: options.params,
        data: options.data,
        responseType: options.dataType.toLowerCase(),
        headers: options.headers
        
    }).then(function(response){
        /*console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);*/
        
        var data = response.data;
        
        if(options.converter){
            try {
                data = options.converter.call(options.context,data);
            } catch(e){
                return Promise.reject(String(e))
            }
        }
        
        return Promise.resolve(data)
        
    }, function(error){
        
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          /*console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);*/
          
          // get the error message from the response.data
          var parseData = new Promise(function(resolve, reject) {
              var data = error.response.data;
              var responseType = error.config.responseType;
              
              function decodeJson(data){
                try {
                    data = JSON.parse(data);
                } catch(e){
                    reject('invalid JSON data')
                    return
                }
                
                resolve(data)
              }
              
              switch(responseType){ // 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
                    
                    case 'text':
                        decodeJson(data)
                        break;
                    case 'json':
                        resolve(data)
                        break;
                    case 'blob':
                        
                        if(typeof FileReader === "undefined"){
                            reject("FileReader not supported.");
                            return;
                        }
                        
                        var fileReader = new FileReader();
                        fileReader.onload = function() {
                            decodeJson(String.fromCharCode.apply(null, new Uint8Array(this.result)));
                        };
                        fileReader.readAsArrayBuffer(data);
                        
                        break;
                    case 'arraybuffer':
                        decodeJson(String.fromCharCode.apply(null, new Uint8Array(data)));
                        break;
                    case 'buffer':
                        decodeJson(data.toString("utf8"));
                        break;
                    default:
                        reject(responseType+" response type not supported.");
                        break;
                }
          })
          
          return parseData.then(function(serverErr){
              return Promise.reject(serverErr.message);
          }, function(parseErr) {
              return Promise.reject(parseErr);
          })
          
          
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          return Promise.reject('no response from the server');
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
          return Promise.reject(error.message || 'invalid request');
        }
    }).then(function(data){
        self.trigger('ething.request.success',[data]);
        
        if(typeof callback === 'function'){
            callback.call(self, data, false)
        }
        
        return data
    }, function(err){
        self.trigger('ething.request.error',[err]);
        
        if(typeof callback === 'function'){
            callback.call(self, null, err)
        }
        
        return Promise.reject(err)
    })
    
}





/**
 * This function get the available resources. A filter may be given to retrieve resources with specific attributes (see the HTTP API for more details).
 * @method EThing.list
 * @param {string} [query] Query string for searching resources
 * @param {function(data)} [callback] it is executed once the request is complete whether in failure or success
 * @returns {Promise}
 * @example
 * // get all the resources
 * EThing.list().then(function(resources){
 *     console.log(resources);
 * })
 *
 * // get only File & Table resources
 * EThing.list('type == "File" or type == "Table"').then(function(resources){
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
 * @param {function(data)} [callback] it is executed once the request is complete whether in failure or success
 * @returns {Promise}
 * @example
 * // get a resource by its id
 * EThing.get("54516eb").then(function(resource){
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
 * @param {function(data)} [callback] it is executed once the request is complete whether in failure or success
 * @returns {Promise}
 * @example
 * // get the occupied space :
 * EThing.usage().then(function(usage){
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




module.exports = EThing;

