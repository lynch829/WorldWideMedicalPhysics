$(document).ready(function(){
  var nav = $('.nav');
  var navScroll = 'nav-scrolled';
  var headerHeight = $('.hero').height();
  $(window).scroll(function(){
    if($(this).scrollTop() > headerHeight)
      nav.addClass(navScroll);
    else
      nav.removeClass(navScroll);
  });

  // Expand description of services
  $('.service-item').on('click', function(){
    $(this).find('.more').slideToggle();
  });
});
