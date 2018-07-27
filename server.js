const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname});
});

app.get('/static/bundle.js', (req, res) => {
    res.sendFile('static/bundle.js', {root: __dirname});
});

app.listen(4000);
