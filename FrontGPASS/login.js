$(document).ready(function(){

  $('#log-submit').click(function() {
     var email = $('#email').val();
     var password = $('#password').val();
     var datosRegistro = '&email=' + email + '&password=' + password;

         $.ajax({
           type: "POST",
           url: "http://localhost:8888/gpass/public/index.php/api/login",
           data: datosRegistro,
           cache: false,
           success: function(data, text, done){
            console.log(data);                
          },
           error: function(data, text, done){
           	console.log(data.responseText);
           }

        });

   return false;
   });
});