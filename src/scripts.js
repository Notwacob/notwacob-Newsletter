var $ = require('jquery');

$('form').submit(function(event){
    event.preventDefault();
    $.ajax({
        url: '/',
        type: 'POST',
        data: {
            email: 'wilson.a.jacob@gmail.com'
        },
        success: function(response) {
            console.log(response)
        }
    }); 
});