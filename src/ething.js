/**
 * EThing - javascript API of the EThing project
 */


var EThing = require("./core.js");

// do not touch the following line, the version number will be automatically updated when executing 'npm version'
EThing.VERSION = '0.1.14';

require("./resource.js");
require("./settings.js");
require("./notify.js");
require("./auth.js");
require("./file.js");
require("./table.js");
require("./rule.js");
require("./device.js");
require("./arbo.js");

module.exports = EThing;