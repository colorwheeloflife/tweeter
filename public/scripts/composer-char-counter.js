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

