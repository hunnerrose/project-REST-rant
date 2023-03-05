const router = require('express').Router()
const places = require('../models/places.js')
const db = require('../models')

//Index
router.get('/', (req, res) => {
    db.Place.find()
    .then((places) => {
        res.render('places/index', { places } )
    })
    .catch(err => {
        console.log(err)
        res.render('error404')
    })
//   res.send('GET /places stub')
})

//Post
router.post('/', (req, res) => {
    db.Place.create(req.body)
    .then(() => {
        res.redirect('/places')
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
//   res.send('POST /places stub')
})

//New
router.get('/new', (req, res) => {
  res.render('places/new')
})

//Show
router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
    .populate('comments')
    .then(place => {
        console.log(place.comments)
        res.render('places/show', { place } )
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
//   res.send('GET /places/:id stub')
})

//Put
router.put('/:id', (req, res) => {
    db.Place.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
        res.redirect(`/places/${req.params.id}`);
    })
    .catch((err) => {
        console.log('err', err);
        res.render('error404');
    });
})

//Delete
router.delete('/:id', (req, res) => {
    db.Place.findByIdAndDelete(req.params.id)
    .then(() => {
        res.redirect('/places');
    })
    .catch((err) => {
        console.log('err', err);
        res.render('error404');
    });
})

//Edit
router.get('/:id/edit', (req, res) => {
    db.Place.findById(req.params.id)
    .then((place) => {
        res.render('places/edit', {place});
    })
    .catch((err) => {
        res.render('error404');
    });
})

router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

//POST COMMENT ROUTE
router.post('/:id/comment', (req, res) => {
	console.log('post comment', req.body);
	if (req.body.author === '') {
		req.body.author = undefined;
	}
	req.body.rant = req.body.rant ? true : false;
	db.Place.findById(req.params.id)
		.then((place) => {
			db.Comment.create(req.body)
				.then((comment) => {
					place.comments.push(comment.id);
					place
						.save()
						.then(() => {
							res.redirect(`/places/${req.params.id}`);
						})
						.catch((err) => {
							res.render('error404');
						});
				})
				.catch((err) => {
					res.render('error404');
				});
		})
		.catch((err) => {
			res.render('error404');
		});
});


/* router.post('/:id/comment', (req, res) => {
    console.log(req.body)
    db.Place.findById(req.params.id)
    .then(place => {
        db.Comment.create(req.body)
        .then(comment => {
            place.comments.push(comment.id)
            place.save()
            .then(() => {
                res.redirect(`/places/${req.params.id}`)
            })
        })
        .catch(err => {
            res.render('error404')
        })
    })
    .catch(err => {
        res.render('error404')
    })
}) */


/* router.post('/:id/comment', (req, res) => {
    console.log(req.body)
    if (req.body.rant) {
        req.body.rant = true
    } else {
        req.body.rant = false
    }
    res.send('GET /places/:id/comment stub')
}) */


module.exports = router


/* //NEW
router.get('/new', (req, res) => {
    res.render('places/new')
})

//EDIT
router.get('/:id/edit', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) { 
        res.render('error404')
    } 
    else {
        res.render('places/edit', {place: places[id]})
    }
  })
  

//Rendering new show page we made?
router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    } else if (!places[id]) {
        res.render('error404')
    }
    else {
        res.render('places/show', {place: places[id], id})
    }
  })
  

// DISPLAY PLACES INDEX
router.get('/', (req, res) => {
    //for now we'll use mock data
        //how can I resize just these images?? v

    //Pass the above place arary into the render method to allow us to use that array inside our view
    res.render('places/index', { places })
})

//PUT
router.put('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        // Dig into req.body and make sure data is valid
        if (!req.body.pic) {
            // Default image if one is not provided
            req.body.pic = 'http://placekitten.com/400/400'
        }
        if (!req.body.city) {
            req.body.city = 'Anytown'
        }
        if (!req.body.state) {
            req.body.state = 'USA'
        }
  
        // Save the new data into places[id]
        places[id] = req.body
        res.redirect(`/places/${id}`)
    }
  })
  
  

//CREATE?
router.post('/', (req, res) => {
    console.log(req.body);
    // res.send('POST /places')
    if (!req.body.pic) {
        //Default image if one is not provided
        req.body.pic = 'http://placekitten.com/400/400';
    }
    if (!req.body.city) {
        req.body.city = 'Anytown';
    }
    if (!req.body.state) {
        req.body.state = 'USA';
    }
    places.push(req.body);
    res.redirect('/places');
});

//DELETE
router.delete('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
      res.render('error404')
    }
    else if (!places[id]) {
      res.render('error404')
    }
    else {
      places.splice(id, 1)
      res.redirect('/places')
    }
  })
  

module.exports = router */