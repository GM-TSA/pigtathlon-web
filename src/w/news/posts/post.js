const page = require('../../../modules/page');
const postsList = require('./list');

module.exports = (req, res) => {
    var fileName = req.params.postFileName;
    if (Object.keys(postsList).includes(fileName)) {
        res.send(page(postsList[fileName].content, {}, true));
    } else {
        console.error("Requested post " + fileName + " not found.");
    }
};