const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'))

app.listen(3000, function() {
    console.log("Listenin on ander 3000")
});

app.get('/', function(req, res){
    res.end("Fuck Yea")
});