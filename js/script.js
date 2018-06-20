
$("#addRef").click(function(event){
  event.preventDefault();
    $('#addreference').append('<div class="form-row">'+
      '<div class="form-group col-md-4">'+
        '<label for="inputName9">Name:</label>'+
        '<input type="text" class="form-control" id="inputName6">'+
      '</div>'+

      '<div class="form-group col-md-4">'+
        '<label for="inputMobileNo8">E-mail:</label>'+
        '<input type="email" class="form-control" id="inputMobileNo8" placeholder="e-mail">'+
      '</div>'+

      '<div class="form-group col-md-4">'+
        '<label for="inputMobileNo9">Contact Number:</label>'+
        '<input type="number" class="form-control" id="inputMobileNo9" placeholder="02********">'+
      '</div>'+'</div>'

    )
});

<<<<<<< HEAD
var heightScreen = $(document).width();

$(document).ready(function(){

=======
$(document).ready(function(){
>>>>>>> 5a2ec2a55d8d8ac3fc4c5a055a0cda5a5ecaf2ad
  $(window).scroll(function(){
      if ($(this).scrollTop() > 100) {
          $('#scroll').fadeIn();
      } else {
          $('#scroll').fadeOut();
<<<<<<< HEAD
      };
=======
      }
>>>>>>> 5a2ec2a55d8d8ac3fc4c5a055a0cda5a5ecaf2ad
  });
  $('#scroll').click(function(){
      $("html, body").animate({ scrollTop: 0 }, 600);
      return false;
  });
});
