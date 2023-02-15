const router = require('express').Router()
const places = require('../models/places.js')


//NEW
router.get('/new', (req, res) => {
    res.render('places/new')
})

//SHOW??
router.get('/', (req, res) => {
    //for now we'll use mock data
        //how can I resize just these images?? v

    //Pass the above place arary into the render method to allow us to use that array inside our view
    res.render('places/index', { places })
})

//CREATE?
router.post('/', (req, res) => {
    console.log(req.body);
    // res.send('POST /places')
    if (!req.body.pic) {
        //Default image if one is not provided
        req.body.pic = 'http://placekitten.com/400/400';
    }
    if (!req.body.city) {
        req.body.city = 'Anytown';
    }
    if (!req.body.state) {
        req.body.state = 'USA';
    }
    places.push(req.body);
    res.redirect('/places');
});


module.exports = router