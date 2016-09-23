$(document).ready(function($) {

// - - - ON LOADPAGE - - -
  loadTweets();


// — — — LOADTWEETS FUNCTION — — — 

  function loadTweets() {
    jQuery.ajax({
      url: "/tweets",
      method: 'GET',
      datatype: 'json',
      success: function (result) {
        console.log('Success: you have loaded a tweet!');
        renderTweets(result);
      }
    });
  };


// — — — RENDERTWEETS FUNCTION
  function renderTweets(tweets) {
    tweets.forEach(function(tweet) {
      $('#tweet-container').append(createTweetElement(tweet));
    });
  }


// - - - CREATETWEETELEMENT FUNCITON - - -
  function createTweetElement(tweet) {
    var articleTweet = $('<article>');
    articleTweet.append($(`<header><img src="${tweet.user.avatars.regular}"/><span>${tweet.user.name}</span><span>${tweet.user.handle}</span></header><p>${tweet.content.text}</p><footer><span>${tweet.created_at}</span><img src="../images/solid-black-heart-hi.png"/><img src="../images/repost.png"/><img src="../images/flag.png"/></footer>`));
    return articleTweet;
  }


// - - - ON FORM CLICK - - -
  $("form").on("submit", function newTweet(e) {
    e.preventDefault();
    var query = $(this).serialize();
    if(query.length > 140 || query.length === 0) {
      return alert("You have not entered the right amount of characters in your tweet!!! Try again.");
    }
    else {
      $.ajax( {
      url: '/tweets',
      method: 'POST',
      data: query,
      success: function(tweet) {
        console.log('Success: you are posting a tweet!');
        $('#tweet-container').prepend(createTweetElement(tweet));
        }
      });
    }
  });


// - - - ON COMPOSE BUTTON CLICK - - -

  $('#compose-button').on('click', function(event) {
    $('section:first-of-type').toggle('show');
    $( "textarea" ).focus();
  });


}); // ENDING TO DOCUMENT READY






