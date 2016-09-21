
$(document).ready(function($) {
  $('form input').on('click', function () {
    // e.preventDefault();
    //grab tweet json data
    //create new element to display the data
    //append newly created element to the list

  $('.inputText').submit(function() {
    var inputTweet = $(this).serialize();
    var tweetParagraph = document.createElement('p');
    tweetParagraph.appendChild(inputTweet);
    $('tweet-container').prepend('<article>');
    $('tweet-container article:first').append('header');
    $('tweet-container article:first').append(tweetParagraph);
    $('tweet-container article:first').append('footer');
  });
  });
})
















// document.body.onload = addTweet;

// function addTweet () {
//   var newTweet = document.createElement('article');
//   // var newHeader = document.creatElement('header');
//   var tweetSays = document.createTextNode(tweet);
//   // var newFooter = document.creatElement('footer');
//   newTweet.appendChild(tweetSays);

//   document.tweet-container.insert();
// }