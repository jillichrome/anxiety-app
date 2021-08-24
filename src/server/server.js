const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 8080;
const url = ;

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}).catch(error => console.log(error));
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true
}

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.listen(PORT, function() {
  console.log('Server is running at PORT:', PORT);
});
