const express = require('express');
const app = express();

app.get('/',(req, res)=>{
    res.send('hola mundo');
});

app.listen(8081,(req, res)=>{
    console.log("Server runing in https://localhost:8081");
});