// browser specific code

module.exports = {
	
	"isNode": false,
	
	"btoa": btoa,
	
	"atob" : atob,
	
	"XMLHttpRequest": XMLHttpRequest,
	
	'Blob': Blob,
	
	'Buffer': function(){},
	
	'FileReader': FileReader || null,
	
	'FileReaderSync': FileReaderSync || null

};