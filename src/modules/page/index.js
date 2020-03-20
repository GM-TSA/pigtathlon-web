const nav = require('../nav');

module.exports = (main) => {
    return (req, res) => {
        res.send(`<html><head><link rel="stylesheet" type="text/css" href="/static/styles.css"></head><body>${nav}<div id="page-container">${main}</div></body>`);
    };
};