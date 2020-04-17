const page = require('../../../modules/page');
const postsList = require('./list');

module.exports = (req, res) => {
    var fileName = req.params.postFileName;
    if (Object.keys(postsList).includes(fileName)) {
        let post = postsList[fileName];
        res.send(page(
            post.content,
            {
                title: post.title + " - News",
                description: post.sub,
                canonical: "https://pigtathlon.claytondoesthings.xyz/w/news/posts/" + fileName
            },
            true
        ));
    } else {
        console.error("Requested post " + fileName + " not found.");
    }
};