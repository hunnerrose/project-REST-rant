//Import React and the Def function we created in the default.jsx file
const React = require('react')
const Def = require('../default')

//Create an index stub function and then export it
    //Fill in your home function; Use the Def component that we created in the default.jsx file as a wrapper, then put a little bit of stub home page code inside
        //make a parameter in this below index function in order to accept the data we just passed in the places.js file (data)
function index (data) {
    //We'll need to format the data in the places array into HTML so a web page can display it; we'll do this with the .map() array method
    let placesFormatted = data.places.map((place) => {
        return (
            <div>
                <h2>{place.name}</h2>
                <img src={place.pic} alt={place.name}></img>
            </div>
        )
    })
    // Display the contents of the placesFormatted array we created in the main page as shown below.
    return (
        <Def>
            <main>
                <h1>PLACES INDEX PAGE</h1>
                {placesFormatted}
            </main>
        </Def>
    )
}

module.exports = index