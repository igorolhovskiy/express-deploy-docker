const bodyParser = require('body-parser');
const app = require('app');
const config = require('app/config');

app.set('x-powered-by', false);

app.use(bodyParser.json());

app.use(require('app/controllers'));

// Failsafe function
app.use(function(err, req, res, next) {
    res.json({
        status: "500",
        message: err && err.message
    });
});

app.listen(config.server.port, () => {
    console.log("Server welcomes you on port " + config.server.port);
});