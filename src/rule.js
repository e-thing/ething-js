
var EThing = require("./core.js");
var utils = require("./utils.js");
var Resource = require("./resource.js");


/**
 * Constructs a Rule instance from an object decribing a rule. Should not be called directly. Use instead {@link EThing.list}.
 * @protected
 * @class The Rule resource handle an application
 * @memberof EThing
 * @extends EThing.Resource
 * @param {object} json
 */
var Rule = function(json)
{
	Resource.call(this, json);
}
utils.inherits(Rule, Resource);

// specific methods

/**
 * Returns true if this rule is enabled.
 * @this {EThing.Rule}
 * @returns {boolean}
 */
Rule.prototype.enabled = function() {
	return !!this._json.enabled;
}

/**
 * Returns the id of the script file.
 * @this {EThing.Rule}
 * @returns {string}
 */
Resource.prototype.script = function(){
	return this._json.script;
}

/**
 * Returns an object describing the event.
 * @this {EThing.Rule}
 * @returns {object}
 */
Resource.prototype.event = function(){
	return this._json.event;
}

/**
 * Returns the last exit code returned by the script of this rule.
 * @this {EThing.Rule}
 * @returns {number}
 */
Rule.prototype.scriptReturnCode = function() {
	return this._json.script_return_code;
}

/**
 * Returns the number of times this rule has been executed.
 * @this {EThing.Rule}
 * @returns {number}
 */
Rule.prototype.scriptExecutionCount = function() {
	return this._json.script_execution_count;
}

/**
 * Returns the last time this rule has been executed.
 * @this {EThing.Rule}
 * @returns {Date}
 */
Rule.prototype.scriptExecutionDate = function() {
	return new Date(this._json.script_execution_date);
}


/**
 * Run this rule.
 * @this {EThing.Rule}
 * @param {function(data)} [callback] it is executed once the request is complete whether in failure or success
 * @returns {EThing.Rule} The instance on which this method was called.
 */
Rule.prototype.execute = function(callback){
	var args = [].slice.call(arguments);
    args.unshift(this);
    return Rule.execute.apply(EThing, args);
}



/**
 * Creates a new Rule from the following attributes :
 *   - name {string} __required__ the name of the rule
 *   - script {EThing.File} __required__ the JavaScript code to be executed
 *   - event {object} __required__ the event object describing when to execute this rule
 *       - event.type {string} __required__ the type name of the event (Timer, ResourceCreated, ...)
 *       - event.*  some options depending of the type of event
 *   - script_args {string} an optional string holding the arguments to pass to the script
 *
 * @method EThing.Rule.create
 * @param {object} attributes
 * @param {function(data)} [callback] it is executed once the request is complete whether in failure or success
 * @returns {Promise}
 * @fires EThing#ething.rule.created
 * @example
 * EThing.Rule.create({
 *   name: "myRule",
 *   script: <script_id>,
 *   event: {
 *     type: 'ResourceCreated' // this rule will be fired each time a resource is created !
 *   }
 * }).then(function(resource){
 *     console.log('the new rule is created');
 * })
 */
Rule.create = function(json,callback){
    
    if(json.script instanceof EThing.Resource)
        json.script = json.script.id();
    
	return EThing.request({
		'url': '/rules',
		'dataType': 'json',
		'method': 'POST',
		'contentType': "application/json; charset=utf-8",
		'data': json,
		'converter': EThing.resourceConverter
	},callback).then(function(r){
		EThing.trigger('ething.rule.created',[r]);
        return r
	});
    
	
};


/*
Resource,callback
*/
Rule.execute = function(a,b)
{
	var file_id = null, context;
	if(a instanceof Rule){
		context = a;
		file_id = a.id();
	}
	else if(utils.isId(a))
		file_id = a;
	else {
		throw "First argument must be a Rule object or a rule id !";
		return;
	}
	
	var callback = b;
	
	return EThing.request({
		'url': '/rules/' + file_id + '/execute',
		'method': 'GET',
		'dataType': 'text',
		'context': context
	},callback);
};


EThing.Rule = Rule;
	
module.exports = Rule;
