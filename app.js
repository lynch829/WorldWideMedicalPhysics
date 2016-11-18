$(document).ready(function(){
  var nav = $('.nav');
  var navScroll = 'nav-scrolled';
  var headerHeight = $('.hero').height();
  $(window).scroll(function(){
    // Sticky navbar
    if($(this).scrollTop() > headerHeight)
      nav.addClass(navScroll);
    else
      nav.removeClass(navScroll);

    // Fade in mission statement
    $('.fadein').each( function(i){
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      // If the object is partially in view
      if( bottom_of_window > bottom_of_object - 200 ){
          $(this).animate({'opacity':'1'},500);
        }
      });
    });

  // Expand description of services
  $('.service-item').on('click', function(){
    $(this).find('.more').slideToggle();
  });
});
