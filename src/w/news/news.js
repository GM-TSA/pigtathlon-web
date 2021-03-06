const fs = require('fs');
const page = require('../../modules/page');
const posts = require('./posts');

var main = fs.readFileSync("src/w/news/news.html");
var postsString = "";
for (let postPath in posts.list) {
    let post = posts.list[postPath];
    postsString += `<li onclick="openPost(\'${postPath}\')">
        <ul>
            <li>
                <h2>${post.title}</h2>
            </li>
            <li>
                <span class="timestamp-date">${post.date}</span>
            </li>
            <li>
                <span class="author">${post.author} -&nbsp</span>
            </li>
        </ul>
        <p>${post.sub}</p>
    </li>`;
}
main = main.toString().replace("<posts/>", postsString);

module.exports = page(
    main,
    {
        title: "News",
        description: "Get news and updates about what we're developing in our dev log posts!",
        canonical: "https://pigtathlon.claytondoesthings.xyz/w/subscribe"
    }
);