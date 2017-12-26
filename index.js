var express = require('express')
var app = express()
var time = require('time')(Date);

var d = new Date();
d.setTimezone('Europe/Copenhagen');
var now = d.toString();

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function (request, response) {
    response.send(now)
})

app.listen(app.get('port'), function () {
    console.log("Node app is running at localhost:" + app.get('port'))
})
