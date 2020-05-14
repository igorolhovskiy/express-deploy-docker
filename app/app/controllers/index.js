const root = require('express').Router({mergeParams: true});
const config = require('app/config');

root.all('/build', (req, res) => {
    
    console.log("Request received: " + JSON.stringify(req.body));

    res.json({
        status: "200",
        message: JSON.stringify(req.body),
    });
});

module.exports = root;