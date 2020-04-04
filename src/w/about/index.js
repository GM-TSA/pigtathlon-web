const fs = require('fs');
const page = require('../../modules/page');

module.exports = page(
    fs.readFileSync("src/w/about/about.html"),
    {
        title: "About",
        description: "About: why are we developing Pigtathlon? It's because of the TSA competition being canceled. Who are the developers?",
        canonical: "https://pigtathlon.claytondoesthings.xyz/w/about"
    }
);