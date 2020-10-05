import '../styles/main.scss';
import $ from 'jquery/src/jquery';



$(window).on('load', function () {




  function gotop() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500);
    currentAnchor = 0;
  }


  jQuery.browser = {};
  jQuery.browser.mozilla = /mozilla/.test(navigator.userAgent.toLowerCase()) &&
    !/webkit/.test(navigator.userAgent.toLowerCase());

  let chromeWheel = "mousewheel";
  let mozWheel = "DOMMouseScroll";

  function scrollTo(test) {
    $('.scroll-container').on(test, function (e) {
      e.preventDefault();
      e.stopPropagation();
      if (isAnimating) {
        return false;
      }
      isAnimating = true;
      // Increase or reset current anchor
      if (e.type == mozWheel) {

        if (e.originalEvent.detail >= 0) {
          currentAnchor++;
        } else {
          currentAnchor--;
        }
      } else {
        if (e.originalEvent.wheelDelta >= 0) {
          currentAnchor--;
        } else {
          currentAnchor++;
        }
      }
      if (currentAnchor > (anchors.length - 1)) {
        currentAnchor--;
      } else if (currentAnchor < 0) {
        currentAnchor++;
      }
      isAnimating = true;
      $('html, body').animate({
        scrollTop: parseInt(anchors[currentAnchor])
      }, 700, 'swing', function () {
        isAnimating = false;
      });
    });
  }

  if ($(window).width() > 959 && $(window).width() > $(window).height()) {
    var anchors = [];
    var currentAnchor = -1;
    var isAnimating = false;
    $(function () {
      function updateAnchors() {
        anchors = [];
        $('.section').each(function (i, element) {
          anchors.push($(element).offset().top);
        });
      }
      if (jQuery.browser.mozilla) {
        scrollTo(mozWheel, {
          passive: true
        });
      }

      updateAnchors();
      scrollTo(chromeWheel)
    });
  }
});

