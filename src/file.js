
var EThing = require("./core.js");
var utils = require("./utils.js");
var Resource = require("./resource.js");


/**
 * Constructs a File instance from an object decribing a file. Should not be called directly. Use instead {@link EThing.list}.
 * @protected
 * @class The File resource handle regular file such as image or text
 * @memberof EThing
 * @extends EThing.Resource
 * @param {object} json
 */
var File = function(json)
{
	Resource.call(this, json);
}
utils.inherits(File, Resource);

/**
 * Returns the size of this file in bytes.
 * @this {EThing.File}
 * @returns {number}
 */
File.prototype.size = function() {
	return this._json.size;
}
/**
 * Returns the amount of seconds after the last update after which this file is removed automatically, or null if this feature is not enable (no time limit).
 * @this {EThing.File}
 * @returns {number|null}
 */
File.prototype.expireAfter = function(){
	return this._json.expireAfter || null;
}
/**
 * Returns the MIME type of this file
 * @this {EThing.File}
 * @returns {string}
 */
File.prototype.mime = function(){
	return this._json.mime;
}

/**
 * Last time the content of this resource was modified
 * @this {EThing.File}
 * @returns {Date}
 */
File.prototype.contentModifiedDate = function() {
	return new Date(this._json.contentModifiedDate);
}

/**
 * If this file has a thumbnail (thumbnail is only available for file with MIME type __image/*__), it returns his link, else it returns null.
 *
 * @this {EThing.File}
 * @param {boolean} [auth=false] wether or not attach any authentication element. Necessary if you are not using {@link EThing.request}.
 * @returns {string|null}
 * @example
 * // the simple way
 * var image = new Image();
 * image.src = imageFile.thumbnailLink(true);
 * document.body.appendChild(image);
 *
 * // the hard way
 * EThing.request({
 *   url: imageFile.thumbnailLink(),
 *   dataType: "blob"
 * }).then(function(blobData){
 *   // success
 *   var image = new Image();
 *   image.src = window.URL.createObjectURL( blobData );
 *
 *   document.body.appendChild(image);
 * });
 */
File.prototype.thumbnailLink = function(auth) {
  return this._json.hasThumbnail ? EThing.toApiUrl('files/'+this.id()+'/thumbnail',auth) : null;
}

/**
 * Returns the link to access the content.
 * @this {EThing.File}
 * @param {boolean} [auth=false] wether or not attach any authentication element. Necessary if you are not using {@link EThing.request}.
 * @returns {string}
 * @example
 * // using EThing.request() :
 * EThing.request(file.getContentUrl()).then(function(content){
 *   // success
 *   console.log('content as text : '+content);
 * });
 *
 * // HTML <img> Tag :
 * var image = new Image();
 * image.src = imageFile.getContentUrl(true);
 * document.body.appendChild(image);
 */
File.prototype.getContentUrl = function(auth) {
	return EThing.toApiUrl('files/'+this.id(),auth);
}

/**
 * Returns true if this file has text based content.
 * @this {EThing.File}
 * @returns {boolean}
 */
File.prototype.isText = function() {
	return this._json.isText;
}

/**
 * Returns true if this file is a script.
 * @this {EThing.File}
 * @returns {boolean}
 */
File.prototype.isScript = function() {
	return this._json.isText && this._json.mime === 'application/javascript';
}

// specific methods

/**
 * Gets the content of this file as text or as binary data.
 * @this {EThing.File}
 * @param {boolean|string} [binary] if true, return the content as ArrayBuffer, if false return the content as text. A string such as 'blob' or 'json' may also be passed.
 * @param {function(data)} [callback] it is executed once the request is complete whether in failure or success
 * @returns {EThing.File} The instance on which this method was called.
 * @example
 * file.read().then(function(content){
 *   // success
 *   console.log('content as text : '+content);
 * });
 *
 * // nodejs + browser :
 * file.read(true).then(function(contentAsArrayBuffer){
 *   // success
 * });
 *
 * // browser :
 * file.read('blob').then(function(contentAsBlob){
 *   // success
 * });
 *
 * // NodeJs :
 * var fs = require("fs");
 * EThing.get('kDO5Fk4').then(function(resource){
 * 	resource.read(true).then(function(data){
 * 		// data : Buffer instance
 * 		fs.writeFile(resource.basename(), data, function(){
 * 			console.log('It\'s saved!');
 * 		});
 * 	});
 * });
 *
 */
File.prototype.read = function(binary, callback){
	var args = [].slice.call(arguments);
    args.unshift(this);
    return File.read.apply(EThing, args);
}

/**
 * Writes some content to this file.
 * @this {EThing.File}
 * @param {string|Blob|Buffer|ArrayBuffer} data
 * @param {function(data)} [callback] it is executed once the request is complete whether in failure or success
 * @returns {EThing.File} The instance on which this method was called.
 * @example
 * file.write("hello world !").then(function(){
 *   // success
 * });
 *
 */
File.prototype.write = function(data, callback){
	var args = [].slice.call(arguments);
    args.unshift(this);
    return File.write.apply(EThing, args);
}



/**
 * Creates a new File from the following attributes :
 *   - name {string} __required__ the name of the file
 *   - description {string} a string describing this file
 *   - data {object} key/value pairs to attach to this file
 *   - expireAfter {number} amount of seconds after the last update after which this file is removed automatically, 0 means unlimited. Default to 0.
 *
 * @method EThing.File.create
 * @param {object} attributes
 * @param {function(data)} [callback] it is executed once the request is complete whether in failure or success
 * @returns {Promise}
 * @fires EThing#ething.file.created
 * @example
 * EThing.File.create({
 *   name: "foobar.txt",
 *   description: "this is my file"
 * }).then(function(resource){
 *     console.log('file created : ' + resource.name());
 * })
 */
File.create = function(a,callback){

	if(typeof a == "string")
		a = {
			'name': a
		};

    var json = Object.assign({}, a);

    return new Promise(function(resolve, reject) {
        utils.toBase64(json.content || '', function(content){
            json.content = content;

            EThing.request({
                'url': '/files',
                'dataType': 'json',
                'method': 'POST',
                'contentType': "application/json; charset=utf-8",
                'data': json,
                'converter': EThing.resourceConverter
            },callback).then(function(file){

                EThing.trigger('ething.file.created',[file]);

                resolve(file)
            }).catch(function(err){
                reject(err)
            });

        });
    })
};

/*
Resource,boolean,callback{function({string|buffer})}
*/
File.read = function(file, binary, callback)
{
	var context;
	if(file instanceof File){
		context = file;
		file = file.id();
	}
	else if(!utils.isId(file)){
		throw "First argument must be a File object or a file id !";
	}

	if(typeof callback == 'undefined' && typeof binary == 'function'){
		callback = binary;
		binary = false;
	}

	return EThing.request({
		'url': '/files/' + file,
		'method': 'GET',
		'dataType': binary ? (typeof binary === 'string' ? binary : 'arraybuffer') : 'text',
		'context': context
	},callback);
};

/*
Resource,args,callback{function({object})}
*/
File.execute = function(file, args, callback)
{
	var context;
	if(file instanceof File){
		context = file;
		file = file.id();
	}
	else if(!utils.isId(file)){
		throw "First argument must be a File object or a file id !";
	}

	if(typeof callback === 'undefined' && typeof args === 'function'){
		callback = args;
		args = null;
	}

	return EThing.request({
		'url': '/files/' + file + '/execute?' + utils.param({'args':args}),
		'method': 'GET',
		'dataType': 'json',
		'context': context
	},callback);
};

/*
Resource,data{string},callback{function({EThing.File})}
*/
File.write = function(a,b,c)
{
	var file_id = null, context;
	if(a instanceof File){
		context = a;
		file_id = a.id();
	}
	else if(utils.isId(a))
		file_id = a;
	else {
		throw "First argument must be a File object or a file id !";
		return;
	}

	var callback = c;

	return EThing.request({
		'url': '/files/' + file_id,
		'dataType': 'json',
		'method': 'PUT',
		'contentType': (typeof b == 'string') ? 'text/plain' : 'application/octet-stream',
		'data': b,
		'context': context,
		'converter': EThing.resourceConverter
	},callback);
};

EThing.File = File;

module.exports = File;
