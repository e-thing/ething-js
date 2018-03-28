
var utils = require('./utils');

var Error_ = function(json){
	this.constructor.prototype.__proto__ = Error.prototype
	Error.captureStackTrace(this, this.constructor)
	this.name = 'EThing.Error';
	if(typeof json == "string")
		json = {
			message: json
		};
	if(json instanceof Error)
		json = {
			message: json.message
		};
	utils.extend(this, {
		message: 'unknown error'
	}, json);
}


module.exports = Error_;
	
