const React = require('react')
const Def = require('../default')



function show (data) {
    return (
        <Def>
          <main>
            <h1>{data.place.name}</h1>
            <img
              src={data.place.pic}
              alt={data.place.name}
            />
            <h2>Rating</h2>
            <p>Currently Unrated</p>
            <h2>Description</h2>
            <p id="p-data">
              Located in {data.place.city}, {data.place.state} and serving {data.place.cuisines}
            </p>
            <div>
              <h2>Comments</h2>
              <p>No comments yet!</p>
            </div>
            <div>
            {/* EDIT BUTTON */}
              <a
                href={`/places/${data.id}/edit`}
                className="btn btn-warning"
              >
                Edit
              </a>
            </div>
				    <br />
            <div>
              {/* DELETE BUTTON */}
                {/*My delete button isn't working; when I click it, I get an error "Cannot PUT /places/undefined" and I'm not sure why? */}
              <form
                method="POST"
                action={`/places/${data.id}?_method=DELETE`}
              >
                <button
                  type="submit"
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </form>
            </div>
          </main>
        </Def>
    )
}

module.exports = show
