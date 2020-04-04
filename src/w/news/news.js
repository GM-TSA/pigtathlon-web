const fs = require('fs');
const page = require('../../modules/page');
const posts = require('./posts');

var main = fs.readFileSync("src/w/news/news.html");
var postsString = "";
for (let postPath in posts.list) {
    let post = posts.list[postPath];
    let link = "/w/news/posts/" + postPath;
    postsString += `<li><h3><a href="${link}">${post.title}</a></h3><p><a href="${link}">${post.sub}</a></p></li>`
}
main = main.toString().replace("<posts/>", postsString);

module.exports = page(main);