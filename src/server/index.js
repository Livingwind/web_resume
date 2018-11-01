const express = require('express');
const favicon = require('express-favicon');

const app = express();

app.use(express.static('dist'));
app.use(favicon('favicon.ico'));
app.get('/', (req, res) => { res.sendFile('dist/index.html')});

app.listen(31450, () => console.log('Listening on port 31450'));
