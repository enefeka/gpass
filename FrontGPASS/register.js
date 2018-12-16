$(document).ready(function(){

  $('#reg-submit').click(function() {
     var name = $('#name').val();
     var email = $('#email').val();
     var password = $('#password').val();
     var datosRegistro = 'name=' + name + '&email=' + email + '&password=' + password;

         $.ajax({
           type: "POST",
           url: "http://localhost:8888/gpass/public/index.php/api/register",
           data: datosRegistro,
           cache: false,
           success: function(data, text, done){
            console.log(data);                
          },
           error: function(data, text, done){
           	console.log(data.statusCode);
           }

        });

   return false;
   });
});