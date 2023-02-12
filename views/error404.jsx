//import React and the Def function we created in the default.jsx file
const React = require('react')
const Def = require('./default')

//Create a error404 stub function & then export it. Then fill in error404 function. Use the Def component that we created in the default.jsx file as a wrapper, then put a bit of stub 404 page code inside (similar to how we did for the home page)

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND!</h1>
                <p>Oops, sorry, we can't find this page!</p>
            </main>
        </Def>
    )
}

module.exports = error404