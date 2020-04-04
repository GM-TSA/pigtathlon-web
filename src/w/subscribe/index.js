const fs = require('fs');
const config = require('../../config');
const page = require('../../modules/page');

var subscribe = fs.readFileSync("src/w/subscribe/subscribe.html");
subscribe = subscribe.toString().replace("<mailchimpClassicForm/>", config.mailchimpNewsletterClassicForm);

module.exports = page(subscribe);