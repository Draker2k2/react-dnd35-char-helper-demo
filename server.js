var path = require('path');
var express = require('express');

var app = express();

//------------------
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const endMw = require('express-end');

app.use(endMw);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// CONTROLLERS
app.use('/', require('./controllers'));

//------------------

app.use(express.static(path.join(__dirname, 'dist')));
app.set('port', process.env.PORT || 8080);

/*
var server = app.listen(app.get('port'), function() {
  console.log('listening on port ', server.address().port);
});
*/

//-----------------------
function listen() {
  app.listen(app.get('port'));
  console.log('server started in PORT: '+app.get('port'));
}

// DEVELOPMENT 
/*
const DB = 'myproyect';
const PORTMONGOSE = 27017;


function connect() {
  //return mongoose.connect('mongodb://draker:239857@ds127065.mlab.com:27065/rol').connection;
  return mongoose.connect(`mongodb://localhost:${PORTMONGOSE}/${DB}`).connection;
}

connect(`mongodb://localhost:${PORTMONGOSE}/${DB}`)
    .on('error', console.log)
    .on('disconected', connect)
    .once('open', listen);

//-----------------------
*/

// HEROKU 

function connect() {
  //return mongoose.connect('mongodb://draker:239857@ds127065.mlab.com:27065/rol').connection;
  return mongoose.connect('mongodb://draker:239857@ds127065.mlab.com:27065/rol').connection;
}

connect('mongodb://draker:239857@ds127065.mlab.com:27065/rol')
    .on('error', console.log)
    .on('disconected', connect)
    .once('open', listen);

//-----------------------
