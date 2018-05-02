var utils = require("./utils.js");
var EThing = require("./core.js");

function Auth() {
    
}

Auth.prototype.install = function(){
    // to be implemented
}

Auth.prototype.uninstall = function(){
    // to be implemented
}

Auth.prototype.set = function(options){
    // to be implemented
}

Auth.prototype.setUrl = function(url){
    return url; // to be implemented
}


function NoAuth(){
    
}
utils.inherits(NoAuth, Auth)


function BasicAuth(login, password){
    this.login = login;
    this.password = password;
}
utils.inherits(BasicAuth, Auth)

BasicAuth.prototype.install = function(){
    EThing.axios.defaults.auth = {
        username: this.login,
        password: this.password
    }
}

BasicAuth.prototype.uninstall = function(){
    EThing.axios.defaults.auth = {}
}

BasicAuth.prototype.setUrl = function(url){
    return url.replace(/\/\/([^:]+:)?[^@]+@/, '//').replace(/\/\//, '//'+login+':'+password+'@');
}


function ApiKeyAuth(apikey){
    this.apikey = apikey;
}
utils.inherits(ApiKeyAuth, Auth)

ApiKeyAuth.prototype.install = function(){
    EThing.axios.defaults.headers.common['X-API-KEY'] = this.apikey;
}

ApiKeyAuth.prototype.uninstall = function(){
    delete EThing.axios.defaults.headers.common['X-API-KEY'];
}

ApiKeyAuth.prototype.setUrl = function(url){
    return utils.insertParam(url, 'api_key', this.apiey);
}

var _auth = null;

/**
 * @namespace EThing.auth
 */
var auth = {
    instance: function(){
        return _auth
    },
    
    /**
     * Returns true if an authentication scheme has been set.
     * @method EThing.auth.isAuthenticated
     * @returns {boolean}
     */
    isAuthenticated: function() {
        return !(_auth instanceof NoAuth)
    },
    
    install: function(auth){
        if(_auth) _auth.uninstall()
        _auth = auth;
        _auth.install()
    },
    
    reset: function(){
        this.install(new NoAuth());
    },
    
    /**
     * Set the apikey authentication scheme for the next requests.
     * @method EThing.auth.setApiKey
     * @param {string} apiKey
     */
    setApiKey: function(apiKey){
        this.install(new ApiKeyAuth(apiKey));
    },
    
    /**
     * Set the basic authentication scheme for the next requests.
     * @method EThing.auth.setBasicAuth
     * @param {string} login
     * @param {string} password
     */
    setBasicAuth: function(login, password){
        this.install(new BasicAuth(login, password));
    },

}

auth.reset()


EThing.auth = auth;

module.exports = auth;