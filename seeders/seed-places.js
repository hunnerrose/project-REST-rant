//Purpose of a seeder file: to provide sample data in a database (for good app demonstration)
const db = require('../models')

//Use Mongoose's create() method to create a new place. (If we pass it an array, it will create multiple places at once)
db.Place.create([{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/h-thai-ml-tables.jpg',
    founded: 1989
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/coffee-cat.jpg',
    founded: 2020
}])
.then( () => {
    console.log('Success!')
        //call the process.exit() method to let the file know when  the process can be closed so it doesn't just hang open like a web server
    process.exit()
})
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})
