var EThing = require("./core.js");
var utils = require("./utils.js");
var Resource = require("./resource.js");




/**
 * Constructs a Device instance from an object decribing a device. Should not be called directly. Use instead {@link EThing.list}.
 * @protected
 * @class The Device resource handle a device
 * @memberof EThing
 * @extends EThing.Resource
 * @param {object} json
 */
var Device = function(json)
{
	Resource.call(this, json);
	
	(this._json.methods || []).forEach(function(operationId){
		if(typeof this[operationId] == 'undefined'){
			var self = this;
			
			this[operationId] = function(data, binary, callback){
				var args = [].slice.call(arguments);
                args.unshift(operationId);
                args.unshift(this);
                return Device.execute.apply(EThing, args);
			};
			
			this[operationId].getApi = function(callback){
				return Device.getApi(self, operationId, callback);
			};
			
			this[operationId].executeUrl = function(data){
				return self.executeUrl(operationId, data);
			};
		}
	}, this);
}
utils.inherits(Device, Resource);


/**
 * 
 * @this {EThing.Device}
 * @returns {string|null} Return either a string containing information about the location (coordinates, place, room ...) or null if no location is defined for this device.
 */
Device.prototype.location = function() {
  return this._json.location || null;
}

/**
 * 
 * @this {EThing.Device}
 * @returns {boolean} Return true if the device is connected.
 */
Device.prototype.connected = function() {
	return !!this._json.connected;
}

/**
 * 
 * @this {EThing.Device}
 * @returns {Date|null}
 */
Device.prototype.lastSeenDate = function() {
  return (typeof this._json.lastSeenDate == 'string') ? new Date(this._json.lastSeenDate) : null;
}

/**
 * 
 * @this {EThing.Device}
 * @returns {boolean}
 */
Device.prototype.hasBattery = function() {
  return (typeof this._json.battery == "number") && this._json.battery >= 0 ;
}

/**
 * 
 * @this {EThing.Device}
 * @returns {number}
 */
Device.prototype.battery = function() {
  return this.hasBattery() ? this._json.battery : null ;
}

/**
 * List the available methods on this device.
 * @this {EThing.Device}
 * @returns {string[]}
 */
Device.prototype.methods = function(){
	return this._json.methods || [];
}

/**
 * List the available interfaces on this device.
 * @this {EThing.Device}
 * @returns {string[]}
 */
Device.prototype.interfaces = function(){
	return this._json.interfaces || [];
}


/**
 * Execute an operation on this device.
 * @this {EThing.Device}
 * @param {string} operationId
 * @param {object|array|anything} [data] the optional arguments required by the operation
 * @param {boolean} [binary] if true, return the content as ArrayBuffer, if false return the content as text. A string such as 'blob' or 'json' may also be passed.
 * @param {function(data)} [callback] it is executed once the request is complete whether in failure or success
 * @returns {EThing.Device} The instance on which this method was called.
 * @example
 * // if this device is a thermometer :
 * device.execute('getTemperature').then(function(data){
 *   // success, handle the data here
 * });
 *
 * // if this device is a switch :
 * device.execute('setState', {
 * 	 state: true
 * });
 *
 * // you can also pass the arguments as an array :
 * device.execute('setState', [true]);
 * 
 * // or as is :
 * device.execute('setState', true);
 * 
 * 
 * // you may also do :
 * device.getTemperature().then(function(data){
 *   // success, handle the data here
 * });
 *
 */
Device.prototype.execute = function(){
	var args = [].slice.call(arguments);
    args.unshift(this);
    return Device.execute.apply(EThing, args);
}

/**
 * Returns an url for executing an operation.
 * @this {EThing.Device}
 * @param {string} operationId
 * @param {object} [data] the optional data required by the operation
 * @returns {string} The url.
 * @example
 * 
 * var image = new Image();
 * image.src = device.executeUrl('getImage');
 * document.body.appendChild(image);
 *
 */
Device.prototype.executeUrl = function(operationId, data){
	var url = 'devices/'+this.id()+'/call/'+operationId;
	
	if(utils.isPlainObject(data) && Object.keys(data).length !== 0){
		url += '?' + utils.param(data);
	}
	
	return EThing.toApiUrl(url,true);
}

/**
 * Retrieve information about a specific method or all the methods available for this device.
 * @this {EThing.Device}
 * @param {string} [operationId] if set, only information about this operation will be returned
 * @param {function(data)} [callback] it is executed once the request is complete whether in failure or success
 * @returns {EThing.Device} The instance on which this method was called.
 *
 */
Device.prototype.getApi = function(operationId, callback){
	var args = [].slice.call(arguments);
    args.unshift(this);
    return Device.getApi.apply(EThing, args);
}





/*
device, operationId[, data ]
*/
Device.execute = function(device, operationId, data, binary, callback){
	
	var context;
	
	if(device instanceof Device){
		context = device;
		device = device.id();
	}
	else if(utils.isId(device))
		device = device;
	else {
		throw "First argument must be a Device object or a Device id !";
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
		'url': '/devices/' + device + '/call/' + operationId,
		'method': 'POST',
		'contentType': "application/json; charset=utf-8",
		'data': typeof data != 'undefined' && data!==null ? JSON.stringify(data) : undefined,
		'dataType': binary ? (typeof binary === 'string' ? binary : 'arraybuffer') : 'text',
		'context': context
	},callback);
	
};


/*
device[, operationId]
*/
Device.getApi = function(device, operationId, callback){
	
	var context;
	
	if(typeof operationId == 'function' && typeof callback == 'undefined'){
		callback = operationId;
		operationId = undefined;
	}
	
	if(device instanceof Device){
		context = device;
		device = device.id();
	}
	else if(utils.isId(device))
		device = device;
	else {
		throw "First argument must be a Device object or a Device id !";
		return;
	}
	
	return EThing.request({
		'url': '/devices/' + device + '/api' + (operationId?('/'+operationId):''),
		'method': 'GET',
		'context': context,
		'dataType': 'json'
	},callback);
	
};


/**
 * Creates a new device
 *
 * @method EThing.Device.create
 * @param {string} type the type of the device to create (ie: SSH, MQTT ...)
 * @param {object} attributes
 * @param {function(data)} [callback] it is executed once the request is complete whether in failure or success
 * @returns {Promise}
 * @fires EThing#ething.device.created
 * @example
 * EThing.Device.create('SSH', {
 *   host: "localhost",
 *   auth: {
 *     user: "foo",
 *     password: "bar"
 *   }
 * }).then(function(resource){
 *     console.log('the new SSH device has been created');
 * })
 */
Device.create = function(type, a,callback){
	
	a.type = type;
	
	return EThing.request({
		'url': '/devices',
		'dataType': 'json',
		'method': 'POST',
		'contentType': "application/json; charset=utf-8",
		'data': a,
		'converter': EThing.resourceConverter
	},callback).then(function(r){
		EThing.trigger('ething.device.created',[r]);
        return r;
	});
	
};

EThing.Device = Device;

module.exports = Device;

