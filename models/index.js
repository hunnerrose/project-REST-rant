//This file is a one-stop shop for our connection info and access to all of our models.

//require the dotenv package to ensure we can use the value of the MONGO_URI environment variable
require('dotenv').config()

//Connect to Mongoose
const mongoose = require('mongoose')
const MONGO_URI = process.env.MONGO_URI
//Remove unecessary terminal warning msgs
mongoose.set('strictQuery', true);
mongoose.connect(
    MONGO_URI, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(
        () => { console.log('connected to mongo: ', MONGO_URI) }
)

module.exports.Place = require('./places')
module.exports.Comment = require('./comment')
//