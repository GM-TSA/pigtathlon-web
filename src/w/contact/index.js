const fs = require('fs');
const page = require('../../modules/page');

module.exports = page(fs.readFileSync("src/w/contact/contact.html"));