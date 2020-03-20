const fs = require('fs');

module.exports = (req, res) => res.send(fs.readFileSync("src/w/styles/styles.css"));