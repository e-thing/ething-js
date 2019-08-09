
var Event = require("./event.js");

function EventEngine(obj){

	var event_map = {};

	obj.on = function(events, handler) {
		if(typeof handler == 'function'){
			events = events.split(' ');
			for(var i=0; i<events.length; i++){
				var event = events[i];
				if(event.length){
					if(!event_map[event]) event_map[event] = [];
					event_map[event].push(handler);
				}
			}
		}
	}

	obj.off = function(events, handler) {
		events = events.split(' ');
		for(var i=0; i<events.length; i++){
			var event = events[i];
			if(event.length && event_map[event]){
				if(typeof handler == 'function'){
					for(var j=0; j<event_map[event].length; j++){
						if(event_map[event][j]===handler){
							event_map[event].splice(j, 1);
							j--;
						}
					}
				}
				else {
					event_map[event] = [];
				}
			}
		}
	}

	obj.one = function(events, handler) {
		if(typeof handler == 'function'){
			obj.on(events, function(){
				obj.off(events,handler);
				handler.apply(this,Array.prototype.slice.call(arguments));
			});
		}
	}

	obj.trigger = function(event, extraParameters){
		if(typeof event === 'string')
			event = Event(event);

		var type = event.type,
			h = event_map[type] || [];

		if (event_map['*']) h = h.concat(event_map['*'])

		for(var i=0; i<h.length; i++){
			var args = [event];
			if(Array.isArray(extraParameters))
				args = args.concat(extraParameters);
			h[i].apply(obj,args);

			if(event.isImmediatePropagationStopped() || event.isPropagationStopped())
				break;
		}
		return event;
	}


}

module.exports = EventEngine;
