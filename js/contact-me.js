/*
  Jquery Validation using jqBootstrapValidation
*/
$(function() {
  var messages = new Firebase('https://rioinfo.firebaseio.com/messages');
  
  $("input,textarea").jqBootstrapValidation({
    preventSubmit: true,
    submitError: function($form, event, errors) {
    },
    
    submitSuccess: function($form, event) {
      event.preventDefault(); // prevent default submit behaviour
      // get values from FORM
      var name = $("input#name").val();  
      var email = $("input#email").val(); 
      var message = $("textarea#message").val();
      var firstName = name; // For Success/Failure Message
      // Check for white space in name for Success/Fail message
      if (firstName.indexOf(' ') >= 0) {
        firstName = name.split(' ').slice(0, -1).join(' ');
      }        
      console.log("pushing to firebase");
      messages.push({name:name, email:email, msg:message});
    
        // Success message
        $('#success').html("<div class='alert alert-success'>");
        $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
        .append( "</button>");
        $('#success > .alert-success')
        .append("<strong>Your message has been sent. </strong>");
        $('#success > .alert-success')
        .append('</div>');                     
      //clear all fields
      $('#contactForm').trigger("reset");
      
    //  error: function() {    
    // // Fail message
    //  $('#success').html("<div class='alert alert-danger'>");
    //           $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
    //            .append( "</button>");
    //           $('#success > .alert-danger').append("<strong>Sorry "+firstName+" it seems that my mail server is not responding...</strong> Could you please email us directly at <a href='mailto:hello@processedapp.com?Subject=;>hello@processedapp.com</a>? Sorry for the inconvenience!");
    //       $('#success > .alert-danger').append('</div>');
    // //clear all fields
    // $('#contactForm').trigger("reset");
    //   },
    //        })
    //      },
    //      filter: function() {
    //                return $(this).is(":visible");
    //      },
    //    });
  
      // $("a[data-toggle=\"tab\"]").click(function(e) {
      //               e.preventDefault();
      //               $(this).tab("show");
      //   });
  }
 });
});

/*When clicking on Full hide fail/success boxes */ 
$('#name').focus(function() {
     $('#success').html('');
  });
