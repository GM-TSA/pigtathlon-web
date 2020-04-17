const fs = require('fs');

function readPost(fileName) {
    return fs.readFileSync("src/w/news/posts/" + fileName);
}

module.exports = {
    "devlog-2.html": {
        title: "Dev Log #2",
        sub: "Our Second dev log is out! In this dev log, we make some more improvements to the Run & Gun minigame and create a boss character!",
        author: "Clayton Hickey",
        date: 1587071466,
        content: readPost("devlog-2.html")
    },
    "devlog-1.html": {
        title: "Dev Log #1",
        sub: "Watch, or read, our FIRST dev log! In this dev log, we re-did some models, made some other models, and made some cool proceduraly generated levels.",
        author: "Clayton Hickey",
        date: 1586022017,
        content: readPost("devlog-1.html")
    }
};