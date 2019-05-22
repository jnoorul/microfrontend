const express = require('express');

const app = express();
app.use('/search', express.static('./build'));

app.listen(4001);
console.log(`search app is running. >> http://localhost:4001/search`);
