const config = require('../../config');
const nav = require('./nav');
const footer = require('./footer');
const googleAnalyics = require('./googleAnalytics');

module.exports = (main, seo={}, onlyContent=false) => {
    var content = `<html><head><link rel="stylesheet" type="text/css" href="/static/styles.css">${config.mailchimpCode}${googleAnalyics}</head><body>${nav}<div id="page-container">${main}</div>${footer}</body>`;
    if (onlyContent) {
        return content;
    } else {
        return (req, res) => {
            res.send(content);
        };
    }
};