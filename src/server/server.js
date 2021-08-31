const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routes');

const app = express();
const PORT = process.env.PORT || 8080;
const url = 'mongodb://localhost/anxiety';

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}).catch(error => console.log(error));
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true
}

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/', router);

app.listen(PORT, function() {
  console.log('Server is running at PORT:', PORT);
});
