const express = require('express');

const app = express();
app.use('/recommendations', express.static('./build'));

app.listen(4003);
console.log(`recommendations app is running. >> http://localhost:4003/recommendations`);
