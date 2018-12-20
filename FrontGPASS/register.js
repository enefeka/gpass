$(document).ready(function(){

  $('#reg-submit').click(function() {
     var name = $('#name').val();
     var email = $('#email').val();
     var password = $('#password').val();

         $.ajax({
           type: "POST",
           url: "http://localhost:8888/gpass/public/index.php/api/register",
           data: {
            name: name,
            email: email,
            password: password
           },
           cache: false,
           success: function(data, text, done){
            console.log(data);
            window.location.href='login.html'               
          },
           error: function(data, text, done){
           	console.log(data.responseText);
           }

        });

   return false;
   });
});