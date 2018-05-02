
var chai = require('chai');
var assert = chai.assert;

var EThing = require('..');


// defaults
var options = {
    'login': 'ething',
    'password': 'admin'
};

before('authentication', function(done) {
    
    EThing.auth.setBasicAuth(options.login, options.password)
    
    done();
    
});


