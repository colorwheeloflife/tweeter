// applying strict syntax rules
"use strict";

// bringing in the .env contents
require('dotenv').config();


// establishing access port in use
const PORT        = process.env.PORT || 8080;
// establishing express capabilities as a server
const express     = require("express");
// establishing the body-parsing ability (being able to take in submitted body content as data)
const bodyParser  = require("body-parser");
// enabling the 'app' keyword to be applied to represent the application/express/server
const app         = express();

// establishing the connection between the server and the api/tweets file
const tweetsApi  = require('./api/tweets');
// establishing the connection between the server and the library database file
const db         = require('./lib/db');


// enables the ability to bring in parsed body content in the form of urlencoded (can understand more)
app.use(bodyParser.urlencoded({ extended: true }));
// allows for the use of static files, such as imgs, css, and javascript
app.use(express.static("public"));

// makes and enables the connection between the database (dbInstance) and the tweets api functional action file (tweetsAPI)
  console.log("Hello");
db.connect((dbInstance) => {
  console.log("HI");
  app.use('/tweets', tweetsApi(dbInstance));
});

// activates listening for server
app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});



// app.post("/tweets", (req, res) => {
//   var tweet = req.body.textInput;
//   // var tweetFeed = {};
//   // tweetFeed.unshift(document.createElement)


// })



// var element = document.createElement(tagName[, options]);

/*TWEET BOX
* each tweet is an article, each as an html tag
* no id's
* each tweet artcile has a header and a footer, each html tags
* use dummy text to simulate content initially
* background color for the header should be different than the main body area
* write HTML for the component without adding any CSS classes and then as you style it out, deicde which CSS classes you really need and where you can simly use tag-based selectors (example: 'article.tweet header' is clear enough.)
*/




// Content-Type: application/x-www-form-urlencoded





