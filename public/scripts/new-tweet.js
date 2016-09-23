// //grab tweet json data
// //create new element to display the data
// //append newly created element to the list

// // WILL BE ABLE TO BRING BACK IN LATER WITH IF STATEMENT



// // $(document).ready(function($) {
// //   $('form input').on('click', function (e) {
// //     e.preventDefault();
// //     renderTweets(data);
// //     // $.ajax({
// //     //   url: '../../server/db/tweets.json',
// //     //   method: 'GET',
// //     //   datatype: 'json',
// //     //   success: function (JSON_Tweets) {
// //     //     console.log('Success: ', JSON_Tweets);
// //     //     renderTweets(JSON_Tweets);
// //     //   }
// //     // });
// //   });
// // })

// // - - - ON LOADPAGE - - -
//   loadTweets();


// // — — — LOADTWEETS FUNCTION — — — 

//   function loadTweets() {
//     jQuery.ajax({
//       url: "/tweets",
//       method: 'GET',
//       datatype: 'json',
//       success: function (JSON_Tweets) {
//         console.log('Success: ', JSON_Tweets);
//         $('#tweet-container').append(renderTweets(JSON_Tweets));
//       }
//     });
//   };


// // — — — RENDERTWEETS FUNCTION
//   function renderTweets(tweets) {
//     tweets.forEach(function(tweet) {
//       $('#tweet-container').append(createTweetElement(tweet));
//     });
//   }


// // - - - CREATETWEETELEMENT FUNCITON - - -
//   function createTweetElement(tweet) {
//     var articleTweet = $('<article>');
//     articleTweet.append($(`<header><img src="${tweet.user.avatars.regular}"/><span>${tweet.user.name}</span><span>${tweet.user.handle}</span></header><p>${tweet.content.text}</p><footer><span>${tweet.created_at}</span></footer>`));
//     return articleTweet;
//   }









// //   $('form input').on('click', function (e) {
// //     e.preventDefault();
// //     var textarea = $(this).siblings('textarea').val();
// //   });




//     // var article = '<article>' + ['<header>' + '<footer>'];

//     // $('#tweet-container').prepend(article);
//     // // $('article:first').appendChild("<header>");
//     // $('article:first').append(textarea);
//     // // $('article:first').appendChild("<footer>");






//        // var paragraph = $("<p>");
//        // $('article:first').append(paragraph);

//         // $('main #tweet-container').append('<article>');

//         // var tweetParagraph = document.createElement('p');
//         // tweetParagraph.appendChild(inputTweet);
//         // $('tweet-container').prepend('<article>');
//         // $('tweet-container article:first').append('header');
//         // $('tweet-container article:first').append(tweetParagraph);
//         // $('tweet-container article:first').append('footer');






















// // document.body.onload = addTweet;

// // function addTweet () {
// //   var newTweet = document.createElement('article');
// //   // var newHeader = document.creatElement('header');
// //   var tweetSays = document.createTextNode(tweet);
// //   // var newFooter = document.creatElement('footer');
// //   newTweet.appendChild(tweetSays);

// //   document.tweet-container.insert();
// // }