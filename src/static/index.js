const fs = require('fs');

const files = fs.readdirSync("src/static/files");

module.exports = (req, res) => {
    const path = __dirname + "/files" + req.path.slice(req.path.indexOf('/', 2));
    if (fs.existsSync(path)) {
        res.sendFile(path);
    } else {
        res.status(404).send("File does not exist.");
    }
};