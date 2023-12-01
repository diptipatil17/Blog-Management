const express = require('express');
var bodyParser = require('body-parser');
const route = require('./routes/route');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/BMS", { useNewUrlParser: true }).then(() => console.log('mongodb running on cluster'))
    .catch(err => console.log(err))

app.use('/', route);
app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});