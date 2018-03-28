var EThing = require("../core.js");
var utils = require("../utils.js");
var Device = require("../device.js");

Device.MQTT = {};

Device.MQTT.getSubscription = function(dev, callback){
	var context;
	
	if(dev instanceof Device){
		context = dev;
		dev = dev.id();
	}
	else if(!utils.isId(dev))
		throw "First argument must be a Device object or a Device id !";
	
	return EThing.request({
		'url': '/devices/' + dev + '/subscription',
		'dataType': 'json',
		'context': context,
		'converter': function(subs){
			if(context instanceof Device){
				// attach this specification to the device
				context.subscription = subs;
			}
			return subs;
		}
	},callback);
	
};


module.exports = Device.MQTT;

