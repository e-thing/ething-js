/**
 * EThing - javascript API of the EThing project
 */


var EThing = require("./core.js");

EThing.VERSION = __VERSION__;

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