let $ = require('jquery');
import fullPageScroll from './full-page';

$(document).ready(function () {
  fullPageScroll;

  $('.nav-toggle__arrow').on('click', function() {
    $(this).toggleClass('active');
    $('.site-nav').toggleClass('toggled');
  })

  $(window).resize(function () {
    if(window.innerWidth > 992) {
      $('.nav-toggle__arrow').removeClass('active');
      $('.site-nav').removeClass('toggled');
    }
  })
});