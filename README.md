Click 'n meal app v2 by Thomas de Groot and Cindy Teeven

## API Endpoints (backend routes)


| HTTP Method | URL                         | Request Body                 | Success status | Error Status | Description                                                  |
| ----------- | --------------------------- | ---------------------------- | -------------- | ------------ | ------------------------------------------------------------ |
| GET         | `/api/profile`              | Saved session                | 200            | 404          | Check if user is logged in and return profile page           |
| POST        | `/api/signup`               | {email, password}            | 200            | 409          |  Checks if user doesn't already exist(409)                   |
| POST        | `/api/signin`               | {email, password}            | 200            | 401,500      | Check if passwords match (401), if user exists (500)         |
| POST        | `/auth/logout`              | (empty)                      | 204            | 500          | Logs out the user                                            |
| POST        | `/api/create`             | {name, description, instructions, ingredients}  | 200   | 500        | Adds a new recipe to the database   |
| GET         | `/api/create`          | (empty)                      | 200          | 500             | Show create page   |
| GET         | `/api/recipe/:id`            | (empty)                      | 200          | 500             | Show recipe details. Wrong id gives(500)     |
<!-- | PATCH       | `/api/venue/:id`             | {title, imgUrl, location, size, owner} | 200   | 400          | Edits the venue with the given id   |
| PATCH       | `/api/musician-profile/edit` |                              | 201            | 400          | Show specific element    |
| PATCH       | `/api/owner-profile/edit`    |                              | 201            | 400          | Show specific element    |
| DELETE      | `/api/venue/:id`             | (empty)                      | 201            | 400          | Delete venue                                              | -->
<!-- | DELETE      | `/api/profile/:id`           | (empty)                      | 201            | 400          | Delete musician profile           | -->