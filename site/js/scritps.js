$(document).ready(function ($) {
  $('.popup-open').click(function () {
      $('.popup-fade').show();
      return false;
  });

  $('.popup-close').click(function () {
      $(this).parents('.popup-fade').hide();
      return false;
  });

  $(document).keydown(function (e) {
      if (e.keyCode === 27) {
          e.stopPropagation();
          $('.popup-fade').hide();
      }
  });

  $('.popup-fade').click(function (e) {
      if ($(e.target).closest('.popup').length == 0) {
          $(this).hide();
      }
  });
});