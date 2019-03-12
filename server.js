
const express = require('express');
const port = process.env.PORT || 3000;

const app = express();

app.use(express.static(__dirname+'/dist/sweeten'));

app.all('*',(req,res) => {
    res.status(200).sendFile(__dirname+'/dist/sweeten/index.html');
});

app.listen(port);