import '../styles/main.scss';
import $ from 'jquery';
import 'jquery.scrollbar'

$(window).on('load', function () {

  $('.scrollbar-inner').scrollbar();

  function checkSmallScreens() {
    if ($(window).width() < 1280) {
      $('section').addClass('animate');
    }
  }

  checkSmallScreens();

  $(window).on('resize', function () {
    checkSmallScreens();
  })
});

