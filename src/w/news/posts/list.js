const fs = require('fs');

function readPost(fileName) {
    return fs.readFileSync("src/w/news/posts/" + fileName);
}

module.exports = {
    "devlog-1.html": {
        title: "Dev Log #1",
        sub: "Watch, or read, our FIRST dev log! In this dev log, we re-did some models, made some other models, and made some cool proceduraly generated levels.",
        date: 1586022017,
        content: readPost("devlog-1.html")
    }
};