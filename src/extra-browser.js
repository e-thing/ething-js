// browser specific code

module.exports = {
	
	"isNode": false,
    
    "btoa": function(a){
        return window.btoa(a);
    },
	
	"atob" : function(a){
        return window.atob(a);
    },
	
	"XMLHttpRequest": window.XMLHttpRequest,
	
	'Blob': window.Blob,
	
	'Buffer': function(){},
	
	'FileReader': window.FileReader || null,
	
	'FileReaderSync': window.FileReaderSync || null

};