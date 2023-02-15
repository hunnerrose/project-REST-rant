const router = require('express').Router()

router.get('/', (req, res) => {
    //for now we'll use mock data
        //how can I resize just these images?? v
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
    //Pass the above place arary into the render method to allow us to use that array inside our view
    res.render('places/index', { places })
})

module.exports = router