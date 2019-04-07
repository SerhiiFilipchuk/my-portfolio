$(document).ready(function () {

  $('.sample1').mouseover(function() {
    $('.sample-description').slideDown(500);  
    $('.sample-shadow').fadeIn(500);  
  });

  $('.sample1').mouseout(function() {
    $('.sample-description').slideUp(500);  
    $('.sample-shadow').fadeOut(500);  
  });

});

