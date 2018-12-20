  window.onload = function()
  {
    checkToken();
    listPasswords();
  }

  function listPasswords(){
      var token = sessionStorage.getItem("token"); 
      $.ajax({
                  url: "http://localhost:8888/gpass/public/index.php/api/passwords",
                  type: 'get',
                    headers: {
                      Authorization: token
                        },
                  success: function (data, text, done)
                  { 
                    var passwords = data.passwords;
                    var ids = data.ids;
                    showPasswords(passwords, ids);
                  },
                  error: function(data, text, done){
                    console.log(data.responseText);
                  }

          })
          }

  function checkToken(){
    var token = sessionStorage.getItem("token");
    if (token == null) {
      window.location.href='index.html';
    }
  }

    function showPasswords(passwords, IDs) {
        
        for (var password in passwords) {
            $('#contraseñasList').append('<div class="contraseña" id="contraseña'+ IDs[password]+'"> '+ passwords[password]+ '<button class="deletebtn"'+ IDs[password]+'" onClick="deletePassword('+IDs[password]+')">Borrar</button></div> <br>');
              } 
      }

      
  function deletePassword(id) {
        var token = sessionStorage.getItem("token"); 
          $.ajax({
           type: "DELETE",
           url: "http://localhost:8888/gpass/public/index.php/api/passwords/"+id,

           headers: {
              Authorization: token
          },
          
          success: function(data, text, done){
              console.log(data.responseText);
              window.location.href='passwords.html';


          }  
          ,
          error: function(data, text, done){
              console.log(data.responseText);           

          }
          });
      }



  $(document).ready(function(){

    $('#pwd-submit').click(function() {
      var passwordTitle = $('#passwordTitle').val();
      var passwordPwd = $('#passwordPwd').val();
      var categoryName = $('#categoryName').val();
       var token = sessionStorage.getItem("token"); 
           $.ajax({
             type: "POST",
             url: "http://localhost:8888/gpass/public/index.php/api/passwords",
              headers: {
  				Authorization: token
  			},
             data: {
              	passwordTitle: passwordTitle,
                passwordPwd: passwordPwd,
                categoryName: categoryName
             },
             success: function(data, text, done){
              console.log(data);
              window.location.href='passwords.html';

            },
             error: function(data, text, done){
             	console.log(data.responseText);
             }

          });

     return false;
     });
  });