const fs = require('fs');
const page = require('../../modules/page');

module.exports = page(
    fs.readFileSync("src/w/404/404.html"),
    {
        title: "404",
        description: "This page does not exist :("
    }
);