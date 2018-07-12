/**
 * EThing - javascript API of the EThing project
 */


var EThing = require("./core.js");

EThing.VERSION = '0.1.9';

require("./resource.js");
require("./settings.js");
require("./notify.js");
require("./auth.js");
require("./file.js");
require("./table.js");
require("./rule.js");
require("./device.js");
require("./devices/http.js");
require("./devices/mqtt.js");
require("./arbo.js");

module.exports = EThing;