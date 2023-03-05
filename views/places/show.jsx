const React = require('react')
const Def = require('../default')



function show (data) {
    let comments = (
      <h6 className="inactive">
        No comments yet!
      </h6>
    )
    let rating = (
      <h6 className="inactive">
        Not yet rated
      </h6>
    )
    if (data.place.comments.length) {
      let sumRatings = data.place.comments.reduce((tot, c) => {
        return tot + c.stars
      }, 0)
      let averageRating = Math.round(sumRatings / data.place.comments.length )
      let stars = ''
      for (let i=0; i < averageRating; i++) {
        stars += '⭐️'
        //
      }
      rating = (
        <h3>
          {stars} stars
        </h3>
      )
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
                <img className="showImg"
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
                {rating}
                {/* <p>Currently Unrated</p> */}
                <h2>Description</h2>
                <h6>
                  {data.place.showEstablished()}
                </h6>
                <h4>
                  Serving {data.place.cuisines}
                </h4>
                <div>
                  {/* EDIT BUTTON */}
                    {/*My edit button isn't working; when I click it, I get an error "Cannot PUT /places/undefined" and I'm not sure why? */}
                  <a
                    href={`/places/${data.place.id}/edit`}
                    className="btn btn-warning"
                  >
                    Edit
                  </a>
                </div>
                <div>
                  {/* DELETE BUTTON */}
                  <form
                    method="POST"
                    action={`/places/${data.place.id}?_method=DELETE`}
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

