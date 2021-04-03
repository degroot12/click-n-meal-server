Click 'n meal app v2 by Thomas de Groot and Cindy Teeven

## API Endpoints (backend routes)


| HTTP Method | URL                         | Request Body                 | Success status | Error Status | Description                                                  |
| ----------- | --------------------------- | ---------------------------- | -------------- | ------------ | ------------------------------------------------------------ |
| GET         | `/api/profile`              | Saved session                | 200            | 404          | Check if user is logged in and return profile page           |
| POST        | `/api/signup`               | {email, password, username}            | 200            | 409          |  Checks if user doesn't already exist(409)                   |
| POST        | `/api/signin`               | {email, password}            | 200            | 401,500      | Check if passwords match (401), if user exists (500)         |
| POST        | `/auth/logout`              | (empty)                      | 204            | 500          | Logs out the user                                            |
| POST        | `/api/create`             | {name, description, instructions, ingredients, image, time, priceCategory, rating, source, creator, weekday, mealType, allIngr}  | 200   | 500        | Adds a new recipe to the database   |
| GET         | `/api/recipe/:id`            | (empty)                      | 200          | 500             | Show recipe details. Wrong id gives(500)     |
| PATCH       | `/api/recipe/:id`            | {name, description, instructions, ingredients, image, time, priceCategory, rating, source, creator, weekday, mealType, allIngr} | 200   | 400  | Edits the recipe with the given id   |
| DELETE      | `/api/recipe/:id`             | (empty)                      | 200            | 400          | Delete recipe                                              |
<!-- | DELETE      | `/api/profile/:id`           | (empty)                      | 201            | 400          | Delete musician profile           | -->