const express = require('express');
const http = require('http');
const path = require('path');
const app = express();
const moment = require('moment');
var cors = require('cors')
app.use(cors())
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


const port = process.env.PORT || '8080';
app.set('port', port);
const server = http.createServer(app);

if( process.argv[2] === 'dev'){	
	app.use(express.static(path.join(__dirname, 'public')));
}
else{
	app.use(express.static(path.join(__dirname, 'build')));	
}

var API = require('./src/backend/router');
app.use('/trybotics', API);

console.log('NODE TIME ===> ' + moment(new Date()).format("YYYY-MM-DD HH:mm:ss"));
server.listen(port, () => console.log(`API running on localhost:${port}`));

