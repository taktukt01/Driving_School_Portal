/**
 * Module dependencies.
 */
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');


/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.config({ path: '.env' });

/**
 * Controllers (route handlers).
 */


/**
 * Create Express server.
 */
const app = express();

/**
 * Connect to MongoDB.
 */

/**
 * Express configuration.
 */
app.set('port', process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 4000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.json());
// set public as static files
app.use(express.static('public'))


/**
 * Error Handler.
 */
if (process.env.NODE_ENV === 'development') {
  // only use in development
  app.use(errorHandler());
} else {
  app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Server Error');
  });
}

app.get("/" , (req,res)=>{
  // Home Page

  res.render("home");
});

app.get("/appointment", (req,res)=>{
  res.render("appointment");
});

app.get("/admin", (req,res)=>{
  res.render("admin");
});


/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
  console.log('%s App is running at http://localhost:%d in %s', app.get('port'));
  console.log('  Press CTRL-C to stop\n');
});

module.exports = app;
