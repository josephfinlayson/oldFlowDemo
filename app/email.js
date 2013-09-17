$(function(){

  var getEmail = $("<div>")
    .attr("id", "modal")
    .html("<div class='modalbody emailmodal'><div id='emailform'>"
      +"<p>In order to continue, please type in your email below</p>"
      +"<input type='text' id='email' placeholder='Your email'>"
      +"<p id='warning'></p>"
      +"<div id='submailcont'><button id='submail' class='confirm'>Try the app!</button></div>"
      +"</div></div>")

  $("body").append(getEmail);

  function email_is_valid(email) {
    var re = /\S+@\S+.\S+/;
    return re.test(email)
  }

  var leads = new Firebase('https://rioinfo.firebaseio.com/leads');
  
  function submit(){
      $("#warning").hide();
      $("#email").removeClass("err");
      var email = $('#email').val();
      if(email_is_valid(email)){
        console.log("Submitting email: "+email)
        leads.push( email);
        $('#modal').html("<div class='modalbody emailmodal'><div id='emailform'>"
      +"<p>Thank you for trying processed!</p>"
      +"<p>You can get in touch with us at <a href='mailto:hello@processedapp.com'>hello@processedapp.com</a>!</p>"
      +"<div id='submailcont'><a id='closewin' class='confirm'>continue</a></div>"
      +"</div></div>")
        $("#closewin").click(function(){ $("#modal").remove();});
        
      }else{
        $("#email").addClass("err");
        $("#warning").html("This doesn't seem to be a valid email address! <br /> Please change it and try again.").fadeIn();
      }
  }

  $('#email').keypress(function(e){
    if(e.keyCode == 13){ submit(); }
  });
  
  $('#submail').click(function () {
    submit();
  });
});
