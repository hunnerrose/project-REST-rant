const React = require('react')
const Def = require('../default.jsx')

//We can access the place data we passed in from the route; Add a parameter to the edit_form function to accept the data
function edit_form(data) {
    return (
        <Def>
            <main>
                <h1>Edit Place</h1>
                <form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
                    {/* Copy the Bootstrap-styled form from the new.jsx view and apste it into this edit.jsx view. We'll be using all the same form fields. Then change the 'action' attribute of the form tag. The new action should reference the 'PUT' method in the query string as shown above */}
                    <div className="form-group">
                        <label htmlFor="name">Place Name</label>
                        <input 
                            className="form-control" 
                            id="name" 
                            name="name" 
                            value = {data.place.name} 
                        required />
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
                    {/* Create submit button */}
                    <input className="btn btn-primary" type="submit" value="Add Place" />
                </form>
            </main>
        </Def>
    )
}

module.exports = edit_form