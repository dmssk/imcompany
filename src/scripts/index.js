import '../styles/main.scss';
import $ from 'jquery';
import 'jquery.scrollbar';
import 'validate.js/validate.min';
import validate from "validate.js";

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


  const constraints = {
    name: {
      presence: { allowEmpty: false }
    },
    phone: {
      presence: { allowEmpty: false }
    }
  };

  $('.form').on('submit', function (e) {
    e.preventDefault();

    let $form = $(this);

    $form.find('.error-message').remove();
    $form.find('input').removeClass('invalid');

    const formValues = {
      name: $form.find('input[name="name"]').val(),
      phone: $form.find('input[name="phone"]').val()
    };

    let errors = validate(formValues, constraints);

    if (!errors){
      let $this = $(this);

      $.ajax({
        type: "POST",
        url: "send-form.php",
        // dataType: "json",	// Тип данных, в которых сервер должен прислать ответ
        data: $this.serialize() + '&type=' + $this.attr('id'),
        error: function () {
          console.log('При выполнении запроса произошла ошибка');
        },
        success: function () {
          console.log('Отправлено!');
        }
      });
    } else {

      for (const [key, value] of Object.entries(errors)) {
        $($form.find(`input[name="${key}"]`)).addClass('invalid');
        $($form.find(`input[name="${key}"]`)).after('<p class="error-message">Поле не может быть пустым</p>');
      }

      console.log(errors);
      return false;
    }
  });

});

