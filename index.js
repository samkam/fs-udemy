const keys = require("./config/keys");
const express = require("express");
const mongoose = require('mongoose');
require('./models/User');
require('./services/passport')

const app = express();
require('./routes/authRoutes')(app);

mongoose.connect(keys.mongoURI);

app.get("/", (req, res) => {
  res.send({ hi: "there friend" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
