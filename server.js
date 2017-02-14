const express = require('express');
const path = require('path');
const app = express();
// Run the pages by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));
// Start the pages by listening on the default
// Heroku port

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(process.env.PORT || 8080);