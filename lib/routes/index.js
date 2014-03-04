var fortune = require('fortune')
, config = require('../../config');

var ideaApi = fortune({
	db: config.get('db:filename')
})
.resource('idea', {
	title: String,
	description: String
});

module.exports = ideaApi;
