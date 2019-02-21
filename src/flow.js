
var EThing = require("./core.js");
var utils = require("./utils.js");
var Resource = require("./resource.js");


/**
 * Constructs a Flow instance from an object decribing a flow. Should not be called directly. Use instead {@link EThing.list}.
 * @protected
 * @class The Rule resource handle an application
 * @memberof EThing
 * @extends EThing.Resource
 * @param {object} json
 */
var Flow = function(json)
{
	Resource.call(this, json);
}
utils.inherits(Flow, Resource);

// specific methods

/**
 * Returns the list of nodes.
 * @this {EThing.Flow}
 * @returns {object}
 */
Flow.prototype.nodes = function(){
	return this._json.nodes;
}

/**
 * Returns the list of connections.
 * @this {EThing.Flow}
 * @returns {object}
 */
Flow.prototype.connections = function(){
	return this._json.connections;
}


/**
 * Deploy this flow.
 * @this {EThing.Flow}
 * @param {function(data)} [callback] it is executed once the request is complete whether in failure or success
 * @returns {EThing.Flow} The instance on which this method was called.
 */
Flow.prototype.deploy = function(callback){
	var args = [].slice.call(arguments);
    args.unshift(this);
    return Flow.deploy.apply(EThing, args);
}


/**
 * Creates a new Flow from the following attributes :
 *   - name {string} __required__ the name of the flow
 *   - flow {object} the object describing the flow
 *
 * @method EThing.Flow.create
 * @param {object} attributes
 * @param {function(data)} [callback] it is executed once the request is complete whether in failure or success
 * @returns {Promise}
 * @fires EThing#ething.flow.created
 * @example
 * EThing.Flow.create({
 *   name: "myFlow"
 * }).then(function(resource){
 *     console.log('the new flow is created');
 * })
 */
Flow.create = function(json,callback){

	return Resource.create(Object.assign({type:'resources/Flow'}, json), callback).then(function(r){
		EThing.trigger('ething.flow.created',[r]);
    return r
	});

};


/*
Resource,callback
*/
Flow.deploy = function(a,b)
{
	var r_id = null, context;
	if(a instanceof Flow){
		context = a;
		r_id = a.id();
	}
	else if(utils.isId(a))
		r_id = a;
	else {
		throw "First argument must be a Flow object or a flow id !";
		return;
	}

	var callback = b;

	return EThing.request({
		'url': '/flows/' + r_id + '/deploy',
		'method': 'GET',
		'dataType': 'text',
		'context': context
	},callback);
};


EThing.Flow = Flow;

module.exports = Flow;
