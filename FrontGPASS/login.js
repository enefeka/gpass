$(document).ready(function(){

  $('#log-submit').click(function() {
     var email = $('#email').val();
     var password = $('#password').val();

         $.ajax({
           type: "POST",
           url: "http://localhost:8888/gpass/public/index.php/api/login",
           data: {
            email: email,
            password: password,
           },
           cache: false,
           success: function(data, text, done){
            console.log(data); 
            var token = data;
            sessionStorage.setItem("token",token);
            window.location.href='passwords.html'
          },
           error: function(data, text, done){
            console.log(data.responseText);
           }

        });

   return false;
   });
});