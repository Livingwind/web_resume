const express = require('express');
const favicon = require('express-favicon');

const app = express();

app.use(express.static('dist'));
app.use(favicon('favicon.ico'));
app.get('/', (req, res) => { res.sendFile('dist/index.html')});

app.listen(process.env.PORT, () => console.log('Listening on port', process.env.PORT));
