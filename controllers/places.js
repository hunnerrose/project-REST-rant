const router = require('express').Router()
let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/thai-food.jpg'
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/coffee-creamer.jpg'
}]

//CREATE?
router.post('/', (req, res) => {
    console.log(req);
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


module.exports = router