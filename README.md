# A simple Node.js server (with tests)

This is simple Node.js/Express.js server written and tested from scratch. You can find a screen recording of this service being built (with narration) at the following links:

* [Creating a simple server](https://youtu.be/6aeSm4ISuyU)
  - `git init`
  - `npm init -y`
  - `npm install express --save`
  - `start` script in `package.json`
  - `server.js`
  - `index.js`
  - `routes.js`
  - `home.html`
  - `public/styles.css`
* [Adding a Supertest](https://youtu.be/SA9smKxJ_iU)
  - `npm install tape tap-diff supertest --save-dev`
  - `test` script in `package.json`
  - `mkdir tests`
  - `tests/home-test.js`
* [Adding Handlebars templates]
  - `npm instal express-handlebars --save`
  - Add Express/Handlebars middleware
  - `mkdir -p views/layouts`
  - `views/layouts/main.hbs`
  - `views/home.hbs`
  - `db.js`
  - `res.render('home', viewModel)`
* [Deploying to Heroku]
  - Create a Heroku account
  - Install Heroku Toolbelt
  - `var PORT = process.env.PORT || 3000`
  - `heroku login`
  - `heroku apps:create`
  - `Procfile`
