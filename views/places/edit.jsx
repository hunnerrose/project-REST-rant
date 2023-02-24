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
                    <div className="row">
                        <div className="form-group col-sm-6">
                            <label htmlFor="name">Place Name</label>
                            <input 
                                className="form-control" 
                                id="name" 
                                name="name" 
                                value = {data.place.name} 
                            required />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="pic">Place Picture</label>
                            <input 
                                className="form-control" 
                                type="url" 
                                id="pic" 
                                name="pic"
                                value = {data.place.pic}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-sm-6">
                            <label htmlFor="city">City</label>
                            <input 
                                className="form-control" 
                                type="text" 
                                id="city" 
                                name="city" 
                                value = {data.place.city}
                            />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="state">State</label>
                            <input 
                                className="form-control" 
                                type="text" 
                                id="state" 
                                name="state" 
                                value = {data.place.state}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">Cuisines</label>
                        <input 
                            className="form-control" 
                            type="text" 
                            id="cuisines" 
                            name="cuisines" 
                            value = {data.place.cuisines}
                        required/>
                    </div>
                    {/* Create submit button */}
                    <input className="btn btn-primary" type="submit" value="Add Place" />
                </form>
            </main>
        </Def>
    )
}

module.exports = edit_form