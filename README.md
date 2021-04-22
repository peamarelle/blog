# blog app

# HOW TO INSTALL DEPENDENCES

* Clone the repository git clone https://github.com/peamarelle/blog.git

* go to directory cd BLOG/server

* Run command npm install

* Generate .env file

```
PORT = 5000

NODE_ENV = development

LOG_LEVEL = Diferents logs levels:

silly | info | error

DATABASE_HOST = localhost

DATABASE_USER = user_example

DATABASE_NAME = db_example

DATABASE_KEY = key_example
```

# Scripts

* Run npm run dev to nodemon mode.

* npm start to deploy aplication in production env.

* Run node index to traditional mode.

# PACKAGES

* express (create server and API-REST´s endpoints).
* nodemon (aplication refresh whenever we modify code).
* dotenv (enviroment variables).
* winston (logger to app´s operations ).
* sequelize (mysql db connection).


# Servers

* http://localhost:5000/posts (development).


# Routes

* GET /posts (find all posts).
* POST /posts (create new posts).
* PATCH /posts/:id (update post by id).
* DELETE /posts/:id (delete post by id).