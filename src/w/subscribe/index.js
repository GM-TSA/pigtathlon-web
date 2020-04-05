const fs = require('fs');
const config = require('../../config');
const page = require('../../modules/page');

var main = fs.readFileSync("src/w/subscribe/subscribe.html");
main = main.toString().replace("<mailchimpClassicForm/>", config.mailchimpNewsletterClassicForm);

module.exports = page(
    main,
    {
        title: "Subscribe",
        description: "Subscribe to the Pigtathlon newsletter to get development updates and news!",
        canonical: "https://pigtathlon.claytondoesthings.xyz/w/subscribe"
    }
);