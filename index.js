const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
const session = require('express-session');
var sessionFileStore = require('session-file-store')(session);
app.use(session({
    secret: 'No one knowsssss',
    resave: true,
    saveUninitialized: false,
    store: new sessionFileStore({
        ttl: 604800
    }),
    cookie: {maxAge: 604800000}
}));
const port = process.env.PORT || 8080;

const static = require('./src/static');
const modules = require('./src/modules');
const w = require('./src/w');
const api = require('./src/api');
const config = require('./src/config');

app.get("/static/*", static);

app.get(
    [
        "/",
        "/w/",
        "/w/home",
        "/w/home/index.html"
    ],
    w.home
);

app.get(
    [
        "/w/subscribe",
        "/w/subscribe/index.html"
    ],
    w.subscribe
);

app.get(
    [
        "/w/about",
        "/w/about/index.html"
    ],
    w.about
);

app.get(
    [
        "/w/contact",
        "/w/contact/index.html"
    ],
    w.contact
);

app.use(w["404"]);

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});