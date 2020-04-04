const config = require('../../config');
const nav = require('./nav');
const footer = require('./footer');
const googleAnalyics = require('./googleAnalytics');

module.exports = (main, seo=undefined, onlyContent=false) => {
    var seoString = "";
    for (let i in seo) {
        switch (i) {
            case "title":
                seoString += `<title>${seo[i]} - Pigtathlon</title>`
                break;
            case "description":
                seoString += `<meta name="description" content="${seo[i]}"/>`;
                break;
            case "canonical":
                seoString += `<link rel="canonical" href="${seo[i]}"/>`
                break;
            default:
                console.error("Unknow seo tag: " + i);
        }
    }
    var content = `<html><head><meta charset="utf-8">${seoString}<link rel="stylesheet" type="text/css" href="/static/styles.css">${config.mailchimpCode}${googleAnalyics}</head><body>${nav}<div id="page-container">${main}</div>${footer}</body>`;
    if (onlyContent) {
        return content;
    } else {
        return (req, res) => {
            res.send(content);
        };
    }
};