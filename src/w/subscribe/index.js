const fs = require('fs');
const config = require('../../config');
const page = require('../../modules/page');

var main = fs.readFileSync("src/w/subscribe/subscribe.html");
main = main.toString().replace("<mailchimpClassicForm/>", config.mailchimpNewsletterClassicForm);

module.exports = page(
    main,
    {
        title: "News",
        description: "Get news and updates about what we're developing in our dev log posts!",
        canonical: "https://pigtathlon.claytondoesthings.xyz/w/news"
    }
);