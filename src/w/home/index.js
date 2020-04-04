const fs = require('fs');
const page = require('../../modules/page');

module.exports = page(
    fs.readFileSync("src/w/home/home.html"),
    {
        title: "Home",
        description: "The homepage of the upcoming game, Pigtathlon - releasing July 24th",
        canonical: "https://pigtathlon.claytondoesthings.xyz/w/home"
    }
);