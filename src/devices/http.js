var EThing = require("../core.js");
var utils = require("../utils.js");
var Device = require("../device.js");


Device.Http = {};


Device.Http.getSpecification = function(dev, callback){
	var context;
	
	if(dev instanceof Device){
		context = dev;
		dev = dev.id();
	}
	else if(!utils.isId(dev))
		throw "First argument must be a Device object or a Device id !";
	
	return EThing.request({
		'url': '/devices/' + dev + '/specification',
		'dataType': 'json',
		'context': context,
		'converter': function(spec){
			if(context instanceof Device){
				// attach this specification to the device
				context.swaggerSpecification = spec;
			}
			return spec;
		}
	},callback);
	
};

module.exports = Device.Http;
