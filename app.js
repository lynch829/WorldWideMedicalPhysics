$(document).ready(function(){
  $('.service-item').on('click', function(){
    $(this).find('.more').slideToggle();
  });
});
