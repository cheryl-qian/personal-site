let h1 = $('#home_description h1')
let h2 = $('#home_description h2')
let hr = $('hr')
let h3 = $('#home_description h3')
let arrow = $('.arrow')


h2.css('display','none');
h3.css('display','none');
hr.css('display','none');
arrow.css('display','none');



$('#portfolio').hide()

h1.on('animationend', function() {
  h2.delay(500).fadeIn();
  hr.delay(1000).fadeIn();
  h3.delay(1500).fadeIn();
  arrow.delay(1600).fadeIn();
  $('#portfolio').delay(1700).fadeIn();
})

$('.menu_icon').click(function() {
  if ($('.mobile_nav').is(':hidden')) {
    $('.mobile_nav').slideDown();
  }
  else {
    $('.mobile_nav').slideUp();
  }
})
