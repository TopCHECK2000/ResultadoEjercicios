var rp = require('request-promise');

rp('https://reclutamiento-14cf7.firebaseio.com/personas.json')
    .then(function(body) {
        console.log(body)
    })
    .catch(function(err) {
        console.log('Error')
    });