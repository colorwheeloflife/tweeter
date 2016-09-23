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
    articleTweet.append($(`<header><img src="${tweet.user.avatars.regular}"/><span>${tweet.user.name}</span><span>${tweet.user.handle}</span></header><p>${tweet.content.text}</p><footer><span>${tweet.created_at}</span></footer>`));
    return articleTweet;
  }


// - - - ON FORM CLICK - - -
  $("form").on("submit", function newTweet(e) {
    e.preventDefault();
    var query = $(this).serialize();

    $.ajax( {
      url: '/tweets',
      method: 'POST',
      data: query,
      success: function() {
        console.log('Success: you are posting a tweet!');
          location.reload();
        // $('#tweet-container').prepend(createTweetElement(tweet));
        // var tweeter = renderTweets(JSON_Tweets);
        // return tweeter;
      }
    });

  });












}); // ENDING QUOTE TO EVERYTHING

























// http://localhost:8080/tweets












// $(document).ready(function() {})




// $.ajax({
    //   url: '../../server/db/tweets.json',
    //   method: 'GET',
    //   datatype: 'json',
    //   success: function (JSON_Tweets) {
    //     console.log('Success: ', JSON_Tweets);
    //     renderTweets(JSON_Tweets);
    //   }
    // });




// $(function() {
//   var $button = $('#load-more-posts');
//   $button.on('click', function () {
//     console.log('Button clicked, performing ajax call...');

//   });
// });







// $(document).ready(function($) {
//   $('form input').on('load', function (e) {
//     e.preventDefault();
//     // console.log("HI!");
//     loadTweets();
//     function loadTweets($) {
//       console.log("HI!");
//       jQuery.ajax({
//         url: "/tweets",
//         method: 'GET',
//         datatype: 'json',
//         success: function (JSON_Tweets) {
//           console.log('Success: ', JSON_Tweets);
//           var tweeter = renderTweets(JSON_Tweets);
//           return tweeter;
//         }
//       });
//     };
//   });
// })






















