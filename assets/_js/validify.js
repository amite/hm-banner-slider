(function($){

  jQuery.validator.addMethod("biz", function(value, element) {
    var invalid_email_domains = ["gmail", "hotmail", "yahoo", "rediff"],
    email = value,
    isValid = true;

    for (var i = 0; i < invalid_email_domains.length; i++) {
      if (email.indexOf(invalid_email_domains[i]) > -1) {
        // console.log("invalid biz address found");
        isValid = false;
        break;
      }
    };

    return isValid;

  }, "Only business emails allowed");

  $('form.landing').validate(
   {
    rules: {
     email: {
        biz: true
     },
     phone: {
        minlength: 8,
        required: true,
        number: true
      }
    },
  // start messages here
    messages: {
      phone: {
        required: "Can't leave Phone blank",
        minlength: "needs at least 8 characters",
        number: "Should be a numeric value"
      }
    }
  });

  $('.basic-form').validate(
   {

    rules: {

      Processor: {
         required: true,
         minlength: 2
      },

      RAM: {
         required: true,
         minlength: 2
      },

      Storage: {
         required: true,
         minlength: 2
      },

      Bandwidth: {
         required: true,
         minlength: 2
      },

      first_name: {
        minlength: 2,
        required: true
      },
      last_name: {
        minlength: 2,
        required: true
      },
      business_email: {
        required: true,
        email: true,
        biz: true
      },
      company: {
        minlength:4,
        required: true
      },
      phone: {
        minlength: 8,
        required: true,
        number: true
      },
      fullname: {
        minlength: 3,
        maxlength: 80
      },
      queries: {
        maxlength: 300
      }
    },

    messages: {
      Processor: {
        required: "Can't leave Processor blank",
        minlength: "needs at least 2 characters"
      },

      RAM: {
        required: "Can't leave RAM blank",
        minlength: "needs at least 2 character"
      },

      Storage: {
        required: "Can't leave Storage blank",
        minlength: "needs at least 2 characters"
      },

      Bandwidth: {
        required: "Can't leave Bandwidth blank",
        minlength: "needs at least 2 characters"
      },

      business_email: {
        required: "Can't leave Email blank",
        minlength: "needs at least 2 characters",
        email: "Please enter valid email address"
      },

      phone: {
        required: "Can't leave Phone blank",
        minlength: "needs at least 8 characters",
        number: "Should be a numeric value"
      },

    fullname: {
      minlength: "needs at least 3 characters",
      maxlength: "cannot exceed 80 characters"
    },

    queries: {
      maxlength: "cannot exceed 200 characters"
    }

    },

    highlight: function(el) {
      //console.log(el);
      $(el)
      .addClass('error')
      .next('span').addClass('error');
    },
    success: function(el) {
      $(el)
//        .text('OK!').addClass('valid')
        .addClass('success')

    }
   });


   $('.form-subscribe').validate(
   {
    rules: {
      subscribe_email: {
        required: true,
        email: true
      }
    },
    messages: {
      subscribe_email: {
        required: "Can't leave Email blank",
        minlength: "needs at least 2 characters",
        email: "Please enter valid email address"
      }
    },
    highlight: function(el) {
      $(el)
      .addClass('error')
      .next('span').addClass('error');
    },
    success: function(el) {
      $(el)
      .addClass('success')
    }
   });


  })(jQuery);