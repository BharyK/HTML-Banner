const express = require ('express');
const app = express ();
const bodyParser = require ('body-parser');
const cors = require ('cors');
const PORT = 4000;
const mongoose = require ('mongoose')
const config = require ('./api/db');
const businessRoute = require ('./busines.route');

mongoose.Promise - global.Promise;
mongoose.connect (config.DB, { useNewUrlParser : true})
        .then (() => {
            console.log ('database is connected')
        },
        err => {
            console.log ('can not connect to the databse'+err);
        }
        )

app.use (cors());
app.use (bodyParser.urlencoded ({extended : true}));
app.use (bodyParser.json ());

app.use ('/business' , businessRoute);

app.listen (PORT, function (){
    console.log ('server is running on' , PORT);
});