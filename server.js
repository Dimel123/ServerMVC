var express = require('express');
var bodyParser = require('body-parser');
var artistsController = require('./controllers/artists');
var db = require("./db");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
    res.send('Hello API');
});

app.get('/artists', artistsController.all);

app.get('/artists/:id', artistsController.fundById);

app.post('/artists', artistsController.create);

app.put('/artists/:id', artistsController.update);

app.delete('/artists/:id', artistsController.delete);

db.connect('mongodb://localhost:27017/myapi', function (err) {
    if (err) {
        return console.log(err);
    }
    app.listen(8080, function () {
        console.log('API started')
    })
});