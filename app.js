const express = require('express');
const app = express();

// Middleware
app.use(express.static(__dirname + '/public'))
//
app.listen(3000, function() {
    console.log("Listenin on ander 3000")
});

app.post('/', function(req, res){
    console.log(req);
    res.end('success');
});