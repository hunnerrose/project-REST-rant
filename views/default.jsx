//Import React
const React = require('react')

//Create a stub function called Def that has one parameter called html
    //Fill in the Def function w/ a return statement htat includes the HTML skeleton you wish all of ur pages to include.
function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                {/* Link Bootstrap */}
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous"/>
                {/* Link tailwind compiled css*/}
                <link href="/dist/output.css" rel="stylesheet"/>
            </head>
            <body>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/places">Places</a>
                        </li>
                        <li>
                        <a href="/places/new">Add Place</a>
                        </li>
                    </ul>
                </nav>
                {html.children}
            </body>
        </html>
    )
}

//Export the Def function (I believe this allows the Def function to be accessible in other files within the same folder/project?)
module.exports = Def