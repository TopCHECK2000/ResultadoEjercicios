var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.static('public'));
app.get('/crearPersonas.html', function(req, res) {
    res.sendFile(__dirname + "/" + "crearPersonas.html");
})
app.post('/process_post', urlencodedParser, function(req, res) {

    response = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        RFC: req.body.RFC
    };



    console.log(response);
    res.end(JSON.stringify(response));


    if (!error && response.statusCode === 201) {
        console.log(body)
    } else {

        console.log("error: " + error)
        console.log("response.statusCode: " + response.statusCode)
        console.log("response.statusText: " + response.statusText)
    }

})
var server = app.listen(8000, function() {
    var host = server.address().address
    var port = server.address().port
    console.log("listening at http://%s:%s", host, port)
})