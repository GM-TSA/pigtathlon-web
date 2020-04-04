const fs = require('fs');
const newsPostsList = require('../w/news/posts/list');

var main = fs.readFileSync('src/sitemap/sitemap.xml');
var newsPosts = "";
for (let i in newsPostsList) {
    let post = newsPostsList[i];
    let date = new Date(post.date*1000);
    let dateParts = Intl.DateTimeFormat('en', {year: 'numeric', month: '2-digit', day: '2-digit'}).formatToParts(date);
    let dateString = `${dateParts[4].value}-${dateParts[0].value}-${dateParts[2].value}`;
    newsPosts +=
    `<url>
        <loc>https://pigtathlon.claytondoesthings.xyz/w/news/posts/${i}</loc>
        <lastmod>${dateString}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
        <news:news>
            <news:publication>
                <news:name>Pigtathlon News</news:name>
                <news:language>en</news:language>
            </news:publication>
            <news:publication_date>${dateString}</news:publication_date>
            <news:title>${post.title} - Pigtathlon</news:title>
        </news:news>
    </url>`
}
main = main.toString().replace("<newsPosts/>", newsPosts);

module.exports = (req, res) => {
    res.send(main);
}