//Require needed modules
const express = require('express')
require('dotenv').config()

//Initialize app
const app = express()

//Add code that defines the view engine (JSX in this case) that we will be using.
    //what is '__dirname' for?
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require ('express-react-views').createEngine())
app.use(express.static('public'))
//when we send data with the POST verb, that data gets encrypted for its trip across the internet. Because it is protected this way while in transit, that makes it extra safe for usernames, passwords, and other sensitive data. However, it also means we will need an extra tool to decrypt that data for us.
app.use(express.urlencoded({ extended: true }));

//Import the router we created in places.js
app.use('/places', require('./controllers/places'))


app.get('/', (req,res) => {
    res.render('home')
})

//Make a Wildcard Route (for 404 errors): It's important that this route is at the bottom, otherwise it will override your other pages..
app.get('*', (req, res) => {
    res.status(404).render('error404')
})

app.listen(process.env.PORT)