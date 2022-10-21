$( document ).ready(function() {

    $('.menu_icon').click(function() {
  if ($('.mobile_nav').is(':hidden')) {
    $('.mobile_nav').slideDown();
  }
  else {
    $('.mobile_nav').slideUp();
  }
})


});