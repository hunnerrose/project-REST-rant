//Import React and the Def function we created in the default.jsx file
const React = require('react')
const Def = require('../default')

//Create a new_form function and then export it
function new_form() {
    return (
        <Def>
            <main>
                <h1>Add a New Place</h1>
            </main>
        </Def>
    )
}

module.exports = new_form