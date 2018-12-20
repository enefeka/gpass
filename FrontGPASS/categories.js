
  window.onload = function()
  {
    checkToken();
    listCategories();
  }

  function listCategories(){
      var token = sessionStorage.getItem("token"); 
      $.ajax({
                  url: "http://localhost:8888/gpass/public/index.php/api/categories",
                  type: 'get',
                          headers: {
                            Authorization: token
                        },
                  success: function (data, text, done)
                  { 
                    var categories = data.categories;
                    console.log(data.categories);
                    var ids = data.ids;
                    showCategories(categories, ids);
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


  function showCategories(categories, IDs) {
          
      for (var category in categories) {
              
        $('#categoriesList').append('<div class="category" id="category'+ IDs[category]+'"> '+ categories[category]+ '<button class="deletebtn"'+ IDs[category]+'" onClick="deleteCategory('+IDs[category]+')">Borrar</button></div> <br>');
              } 
      }
      
  function deleteCategory(id) {
        var token = sessionStorage.getItem("token"); 
          $.ajax({
           type: "DELETE",
           url: "http://localhost:8888/gpass/public/index.php/api/categories/"+id,

           headers: {
              Authorization: token
          },
          
          success: function(data, text, done){
              console.log(data.responseText);
              window.location.href='categories.html';


          }  
          ,
          error: function(data, text, done){
              console.log(data.responseText);           

          }
          });
      }



  $(document).ready(function(){

    $('#cat-submit').click(function() {
       var categoryName = $('#categoryName').val();
       var token = localStorage.getItem("token"); 
           $.ajax({
             type: "POST",
             url: "http://localhost:8888/gpass/public/index.php/api/categories",
              headers: {
  				Authorization: token
  			},
             data: {
              	categoryName: categoryName,
             },
             success: function(data, text, done){
              console.log(data);
              window.location.href='categories.html';

            },
             error: function(data, text, done){
             	console.log(data.responseText);
             }

          });

     return false;
     });
  });