var utils = require("./utils.js");


function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}


/*
Event object
*/

var Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof Event ) ) {
		return new Event( src, props );
	}

	// Event type
	this.type = src;

	// Put explicitly provided properties onto the event object
	if ( props ) {
		utils.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = Date.now();
	
};

Event.prototype = {
	constructor: Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,

	preventDefault: function() {
		this.isDefaultPrevented = returnTrue;
	},
	stopPropagation: function() {
		this.isPropagationStopped = returnTrue;
	},
	stopImmediatePropagation: function() {
		this.isImmediatePropagationStopped = returnTrue;
		this.stopPropagation();
	}
};



	
module.exports = Event;

