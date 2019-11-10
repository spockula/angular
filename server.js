//Install express server
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Serve only the static files form the dist directoryt
const rootPath = path.normalize(__dirname + '/');
app.use(express.static(rootPath + '/app'));


// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
