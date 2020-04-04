const fs = require('fs');
const page = require('../../modules/page');

module.exports = page(
    fs.readFileSync("src/w/contact/contact.html"),
    {
        title: "Contact",
        description: "The contact page for Pigtathlon. For business inquires, questions, or just talking.",
        canonical: "https://pigtathlon.claytondoesthings.xyz/w/description"
    }
);