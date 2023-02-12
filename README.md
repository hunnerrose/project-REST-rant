# Project REST-Rant

REST-Rant is an app where users can review restaurants.

##USER STORIES
1. As a hungry user, I need a map so I can find restaurants.
2. As a user, I need a list of ratings/reviews so I can get an idea of what a restaurant is like and better assess if I want to go there.

##ROUTES

| Method      | Path                    |  Purpose                                                                       |
| ----------- | ------------------------|--------------------------------------------------------------------------------|
| GET         | /                       | The home page                                                                  |
| GET         | /places                 | Index page listing all places                                                  |
| GET         | /places/new             | New form for a place                                                           |
| POST        | /places                 | Create a new place                                                             |
| GET         | /places/:id             | Show one place in detail (Associated rants, new rant form, delete rant button) |
| GET         | /places/:id/edit        | Edit form for a place                                                          |
| PUT         | /places/:id             | Make changes to existing place                                                 |
| DELETE      | /places/:id             | Delete a place                                                                 |
| POST        | /places/:id/rant        | Add rant to a place                                                            |
| DELETE      | /places/:id/rant/:rantId| Delete a rant                                                                  |

##DATABASE
**Places**
| Field    | Type      |
|----------|-----------|
| _id      | Object ID |
| name     | String    |
| city     | Strubg    |
| state    | String    |
| cuisines | String    |
| pic      | String    |