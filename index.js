//Require needed modules
const express = require('express')
require('dotenv').config()

//Initialize app
const app = express()


app.get('/', (req,res) => {
    res.send('Hello world!')
})

//Make a Wildcard Route (for 404 errors): It's important that this route is at the bottom, otherwise it will override your other pages.
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

app.listen(process.env.PORT)