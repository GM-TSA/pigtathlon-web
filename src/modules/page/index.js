const nav = require('./nav');
const footer = require('./footer');
const config = require('../../config');

module.exports = (main) => {
    return (req, res) => {
        res.send(`<html><head>${config.mailchimpCode}<link rel="stylesheet" type="text/css" href="/static/styles.css"></head><body>${nav}<div id="page-container">${main}</div>${footer}</body>`);
    };
};