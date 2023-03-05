const React = require('react')
const Def = require('../default')



function show (data) {
    let comments = (
      <h3 className="inactive">
        No comments yet!
      </h3>
    )
    if (data.place.comments.length) {
      comments = data.place.comments.map(c => {
        return (
          <div className="border">
            <h2 className="rant">{c.rant ? 'Rant! 😒' : 'Rave! 😎'}</h2>
            <h4>{c.content}</h4>
            <h3>
              <strong>- {c.author}</strong>
            </h3>
            <h4>Rating: {c.stars}</h4>
            <form
              method="POST"
              action={`/places/${data.place.id}/comment/${c.id}?_method=DELETE`}
					  >
						<input
							type="submit"
							className="btn btn-danger"
							value="Delete Comment"
						/>
					</form>
          </div>
        )
      })
    }
    return (
        <Def>
          <main>
            <div className="row">
              <div className="col-sm-6">
                <img
                  src={data.place.pic}
                  alt={data.place.name}
                />
                  <h3>
                  Located in {data.place.city}, {data.place.state}
                </h3>
              </div>
              <div className="col-sm-6">
                <h1>{data.place.name}</h1>
                <h2>Rating</h2>
                <p>Currently Unrated</p>
                <h2>Description</h2>
                <h3>
                  {data.place.showEstablished()}
                </h3>
                <h4>
                  Serving {data.place.cuisines}
                </h4>
                <div>
                  {/* EDIT BUTTON */}
                    {/*My edit button isn't working; when I click it, I get an error "Cannot PUT /places/undefined" and I'm not sure why? */}
                  <a
                    href={`/places/${data.id}/edit`}
                    className="btn btn-warning"
                  >
                    Edit
                  </a>
                </div>
                <div>
                  {/* DELETE BUTTON */}
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
              </div>
            </div>
            <div>
              <h2>Comments</h2>
              {comments}
            </div>
            <h2>Want to add your own Rave or Rant?</h2>
            <form
              // POST COMMENT METHOD
              method="POST"
              action={`/places/${data.place.id}/comment`}
            >
              <div className="row">
                <div className="form-group col-sm-12">
                  <label htmlFor="content">Your comment here</label>
                  <textarea
                    id="content"
                    name="content"
                    className="form-control text-center"
                  ></textarea>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="form-group col-sm-5">
                  <label htmlFor="author">Author</label>
                  <input
                    id="author"
                    name="author"
                    className="form-control text-center"
                  />
                </div>
                <div className="form-group col-sm-5">
                  <label htmlFor="stars">Star Rating</label>
                  <input
                    type="range"
                    step="0.5"
                    min="1"
                    max="5"
                    id="stars"
                    name="stars"
                    className="form-range"
                  />
                </div>
                <div className="form-group col-sm-2">
                  <label
                    htmlFor="rant"
                    className="form-check-label"
                    for="rant"
                  >
                    Rant?
                  </label>
                  <br />
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="rant"
                    name="rant"
                    value="yes"
                  />
                </div>
              </div>
              <br />
              <input
                type="submit"
                className="btn btn-primary"
                value="Add Comment"
              />
            </form>
          </main>
        </Def>
    )
}

module.exports = show

