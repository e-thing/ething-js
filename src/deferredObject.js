
var Deferred = require("./deferred.js");

	
// deferred engine
var DeferredObject = function(){
	
	var resolvedDfr = Deferred().resolve(),
		queue = [],
		self = this;
	
	
	['done','fail','always','progress','then','state','isRejected','isResolved'].forEach(function(fctname){
		this[fctname] = function(){
			// get last deferred object in queue
			var dfr = queue.length ? queue[queue.length-1].dfr : resolvedDfr;
			
			var r = dfr[fctname].apply(self,Array.prototype.slice.call(arguments));
			
			if(typeof r == 'object' && fctname!=='then'){
				// dfr object
				return self;
			} else {
				return r; // state , isRejected, isResolved, then
			}
		}
	}, this);
	this.promise = function(){
		return self;
	}
	
	function processQueue(){
		
		for(var i=0; i<queue.length; i++){
			
			var dfr = queue[i].dfr,
				pending = queue[i].pending,
				fn = queue[i].fn;
			
			if(pending){
				
				queue[i].pending = false;
				
				fn.call(self,self)
					.done(function(){
						
						var args = Array.prototype.slice.call(arguments);
						
						dfr.resolveWith(self,args);
					})
					.fail(function(){
						dfr.rejectWith(self,Array.prototype.slice.call(arguments));
					})
					.progress(function(){
						dfr.notifyWith(self,Array.prototype.slice.call(arguments));
					});
				
			}
			else {
				
				if(dfr.isResolved() || dfr.isRejected()){
					queue.splice(i, 1); // remove finished actions
					i--;
					continue;
				}
				// else busy, wait for that element to finish
				
			}
			
			break;
			
		}
	}
	
	this.deferred = function(action){
		
		// bind a new deferred object to this new action
		var dfr = new Deferred();
		
		
		dfr.always(function(){
			// execute the next action
			processQueue();
		});
		
		
		// add this action to the queue 
		queue.push({
			fn: action,
			dfr: dfr,
			pending: true
		});
		
		processQueue();
		
		return this; // chainable
		
	};
	
}

module.exports = DeferredObject;
