
var chai = require('chai');
var assert = chai.assert;

var EThing = require('..');


// defaults
var options = {
    'login': 'ething',
    'password': 'admin'
};

before('authentication', function(done) {
    
    EThing.initialize(options).done(function(){
        
        assert.strictEqual(EThing.auth.isAuthenticated(), true);
        
        done();
        
    }).fail(function(err){
        done(err);
    })
    
});


