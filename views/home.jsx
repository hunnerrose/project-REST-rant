//Import React and the Def function we created in the default.jsx file
const React = require('react')
const Def = require('./default')

//Create a home stub function and then export it
    //Fill in your home function; Use the Def component that we created in the default.jsx file as a wrapper, then put a little bit of stub home page code inside
function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
            </main>
        </Def>
    )
}

module.exports = home