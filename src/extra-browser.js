// browser specific code

module.exports = {
	
	"isNode": false,
	
	"btoa": window.btoa,
	
	"atob" : window.atob,
	
	"XMLHttpRequest": window.XMLHttpRequest,
	
	'Blob': window.Blob,
	
	'Buffer': function(){},
	
	'FileReader': window.FileReader || null,
	
	'FileReaderSync': window.FileReaderSync || null

};