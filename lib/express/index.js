var express = require('express')
, nedb = require('nedb')
, config = require('../../config')
, helmet = require('helmet')
, routes = require('../routes')
, app = express();

app.set('port', process.env.PORT || config.get('express:port'));
app.use(express.compress());
helmet.defaults(app);
//app.use(express.json());
app.use(routes.router);
app.use(app.router);
app.use(express.static('public', { maxAge: config.get('express:staticCache') }));
app.use(express.static('public/bower_components', { maxAge: config.get('express.staticCache') }));
app.get('/heartbeat', function (req, res) {
	res.json(200, 'API OK');
});

var httpServer = require('./server')(app);
module.exports = app;
console.log('running on port', app.get('port'));
