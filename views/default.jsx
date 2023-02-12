//Import React
const React = require('react')

//Create a stub function called Def that has one parameter called html
    //Fill in the Def function w/ a return statement htat includes the HTML skeleton you wish all of ur pages to include.
function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}

//Export the Def function (I believe this allows the Def function to be accessible in other files within the same folder/project?)
module.exports = Def