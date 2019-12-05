const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/stories', {
  useNewUrlParser: true
});

const stories = require("./stories.js");
app.use("/api/stories", stories);

app.listen(4200, () => console.log('Server listening on port 4200!'));