
var EThing = require("./core.js");


/**
 * Send a notification.
 * @memberof EThing
 * @param {string} [subject] The subject of the notification
 * @param {string} message The message of the notification
 * @param {function(data)} [callback] it is executed once the request is complete whether in failure or success
 * @returns {Promise}
 * @example
 * EThing.notify("hello world")
 *   .then(function(){
 *     alert("A notification has been sent");
 *   })
 */
var notify = function(subject,message, callback){
	var query = {};
	
	if(arguments.length == 3){
		query['body'] = message;
		query['subject'] = subject;
	}
	else if(arguments.length == 2){
		if(typeof message == 'string'){
			query['subject'] = subject;
			query['body'] = message;
		}
		else{
			query['body'] = subject;
			callback = message;
		}
	}
	else if(arguments.length == 1){
		query['body'] = subject;
	}
	else {
		throw "Bad arguments!";
		return;
	}
	
	return EThing.request({
		'url': '/notification',
		'method': 'POST',
		'contentType': "application/json; charset=utf-8",
		'data': query
	},callback);
}


EThing.notify = notify;

module.exports = notify;
