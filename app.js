const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middleware
app.use(express.static(__dirname + '/public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
//
app.listen(3000, function() {
    console.log("Listenin on ander 3000")
});

app.post('/', function(req, res){
    addEmailToMailchimp(req.body.email);
    res.end('success');
});

function addEmailToMailchimp(email) {
    var request = require('request');
    var options = {
        'method': 'POST',
        'url': 'https://us9.api.mailchimp.com/3.0/lists/aebdbc7eed/members',
        'headers': {
            'Content-Type': 'application/json',
            'Authorization': 'Basic YW55c3RyaW5nOjNjYmJjODdkYWQ2MTVhMDZkZjM3YmFhZGFhMmM2ZmNlLXVzOQ=='
        },
        body: JSON.stringify({
            "email_address": email,
            "status": "subscribed"
        })

    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
    });

}