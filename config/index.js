var nconf = require('nconf');

function Config() {
	nconf.file('default', 'config/default.json');
}

Config.prototype.get = function (key) {
	return nconf.get(key);
};

module.exports = new Config();
