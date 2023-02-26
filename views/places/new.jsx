//Import React and the Def function we created in the default.jsx file
const React = require('react')
const Def = require('../default')

//Create a new_form function and then export it
function new_form() {
    return (
        <Def>
            <main>
                <h1>Add a New Place</h1>
                {/* Create a form tag w/ two crutial attributes: method 'HTTP verb' and action 'destination path' */}
                <form method="POST" action="/places">
                    {/* Create a div 'block element so each form field will live on a separate line' and in that div, create a label and an input. */}
                        {/* Let's update the label and input with specific information. The most important part to remember is the name attribute of the input tag. This is important because it will be the variable name we end up using on the back-end later. Less critical, but still important, is to make a for attribute on the label that corresponds to an id attribute on the input. That is for accessibility/screen readers! */}
                    <div className="form-group">
                        <label htmlFor="name">Place Name</label>
                        <input className="form-control" type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pic">Place Picture</label>
                        <input className="form-control" type="url" id="pic" name="pic" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input className="form-control" type="text" id="city" name="city" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State</label>
                        <input className="form-control" type="text" id="state" name="state" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">Cuisines</label>
                        <input className="form-control" type="text" id="cuisines" name="cuisines" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="founded">Founded Year</label>
                        <input className="form-control" id="founded" name="founded" />
                    </div>

                    {/* Create submit button */}
                    <input className="btn btn-primary" type="submit" value="Add Place" />
                </form>
            </main>
        </Def>
    )
}

module.exports = new_form