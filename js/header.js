// pre-loader
jQuery.fn.load = function(callback){ $(window).on("load", callback) };
$(window).load(function(){
  $('#preloader').fadeOut('slow',function(){
$(this).remove()})
})

// button functionality
$(document).ready(function(){
  $('.menu-toggle').click(function(){
    $('.menu-toggle').toggleClass('active')
    $('.menu').toggleClass('active')
  })
})

// $(document).on('scroll', function(){
//   $('h1').css('left', Math.max(500 - 0.35*window.scrollY)
//   + 'px', 0)
// })
document.querySelector('portfolioImage').style.transform = 'rotate(90deg)'

// TITLE
$(document).ready(function () {

  function second_passed() {
    $('.clock').removeClass('is-off');
  }
  setTimeout(second_passed, 2000)

  $('.switcher').on('click', function(e) {
    e.preventDefault();
    $('.screen').toggleClass('glitch');
  });


  var newDate = new Date();
  newDate.setDate(newDate.getDate());

  setInterval( function() {

    var hours    = new Date().getHours();
    var seconds  = new Date().getSeconds();
    var minutes  = new Date().getMinutes();

    var realTime = ( 'Timothy Millward' )

    $('.time').html(realTime);
    $('.time').attr('data-time', realTime);

  }, 1000);

});


document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.scrollspy');
  var instances = M.ScrollSpy.init(elems, options);
});

// Or with jQuery

$(document).ready(function(){
  $('.scrollspy').scrollSpy();
});
