/**
 * EThing - javascript API of the EThing project
 */


var EThing = require("./core.js");

// do not touch the following line, the version number will be automatically updated when executing 'npm version'
EThing.VERSION = '0.1.26';

require("./resource.js");
require("./settings.js");
require("./auth.js");
require("./file.js");
require("./table.js");
require("./flow.js");
require("./device.js");
require("./arbo.js");
require("./plugin.js");

module.exports = EThing;
