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
}
utils.inherits(Device, Resource);


/**
 *
 * @this {EThing.Device}
 * @returns {string|null} Return either a string containing information about the location (coordinates, place, room ...) or empty if no location is defined for this device.
 */
Device.prototype.location = function() {
  return this._json.location || '';
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

	return Resource.create(Object.assign({type}, a),callback).then(function(r){
		EThing.trigger('ething.device.created',[r]);
    return r;
	});

};

EThing.Device = Device;

module.exports = Device;
