// event handler to the textarea, for the form inside of the .new-tweet section
// experiment with the following events: change, keydown, keyup
// pick the best event to detect the correct length of the input update the counter

// CHANGE: occurs when a change to the element's value is commited by the user.
// KEYDOWN: occurs when a key is pressed down.
// KEYUP: occurs when a key is released.

function updateCountdown() {
  var remaining = 140 - $('.textInput').val().length;
  $('.counter').text(remaining + ' characters remaining.');
  if(remaining < 0) {
    var redText = document.querySelector('.counter');
    redText.style.color = "#ff0000";
  }
}

$(document).ready(function($) {
  updateCountdown();
    $('.textInput').change(updateCountdown);
    $('.textInput').keydown(updateCountdown);
})







    // $('textInput').on('keydown', function() {




