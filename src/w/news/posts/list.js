const fs = require('fs');

function readPost(fileName) {
    return fs.readFileSync("src/w/news/posts/" + fileName);
}

module.exports = {
    "devlog-1.html": {
        title: "Dev Log #1",
        sub: "Watch our FIRST dev log and get a rundown of what it contains!",
        content: readPost("devlog-1.html")
    }
};