
// var Base_URL = "http://localhost:300/api/"

const post_data = () => {
    var name =  $("#name").val();
    var email = $("#email").val();
    var address = $("#address").val();
    var password = $("#password").val();
    var password_confirm = $("#password_confirm").val();
 
    if((name.trim() != "") && ((email.trim() != "") && (email.indexOf("@") !== -1)) && (address.trim() != "") && ((password.trim() != "") && (password.length >= 5)) && ((password_confirm.trim() != "") && ( password == password_confirm)))
    {
     $.ajax({
         url: "api/account/signup",
         data: {
             username : name, email, address, password
         },
         type: "POST",
         success: function( res ) {         
            $("#snackbar").html(res.message);
            $("#snackbar").addClass("show");
             setTimeout(function(){  $("#snackbar").removeClass("show"); }, 5000);
         }
     });
 
    }
    else{
     if(name.trim() == "")
     { 
         $(".name_err").show();
         $("#name").css("borderColor", "red");
         $("#name").css("shadowColor", "red");
     }
     if((email.trim() == "") || (email.indexOf("@") === -1))
     { 
         $(".email_err").show();
         $("#email").css("borderColor", "red");
         $("#email").css("shadowColor", "red");
     }
     if(address.trim() == "")
     { 
         $(".address_err").show();
         $("#address").css("borderColor", "red");
         $("#address").css("shadowColor", "red");
     }
     if((password.trim() == "") || (password.length < 5))
     { 
         $(".password_err").show();
         $("#password").css("borderColor", "red");
         $("#password").css("shadowColor", "red");
     }
     if((password.trim() == "") || ( password != password_confirm))
     { 
         $(".password_confirm_err").show();
         $("#password_confirm").css("borderColor", "red");
         $("#password_confirm").css("shadowColor", "red");
     }
    }
 }
 
 const name_val = (name) =>{
     if(name.trim() == "")
     { 
         $(".name_err").show();
         $("#name").css("borderColor", "red");
         $("#name").css("shadowColor", "red");
     }
     else{
      $(".name_err").hide();
      $("#name").css("borderColor", "#ced4da");
     }
 }
 const email_val = (email) =>{
     if((email.trim() == "") || (email.indexOf("@") === -1))
     { 
         $(".email_err").show();
         $("#email").css("borderColor", "red");
         $("#email").css("shadowColor", "red");
     }
     else{
      $(".email_err").hide();
      $("#email").css("borderColor", "#ced4da");
     }
 }
 const address_val = (address) =>{
     if(address.trim() == "")
     { 
         $(".address_err").show();
         $("#address").css("borderColor", "red");
         $("#address").css("shadowColor", "red");
     }
     else{
      $(".address_err").hide();
      $("#address").css("borderColor", "#ced4da");
     }
 }
 const password_val = (password) =>{
     if((password.trim() == "") || (password.length < 5))
     { 
         $(".password_err").show();
         $("#password").css("borderColor", "red");
         $("#password").css("shadowColor", "red");
     }
     else{
      $(".password_err").hide();
      $("#password").css("borderColor", "#ced4da");
     }
 }
 const confirm_val = (confirm) =>{
     if((confirm.trim() == "") || ( $("#password").val() != confirm))
     { 
         $(".password_confirm_err").show();
         $("#password_confirm").css("borderColor", "red");
         $("#password_confirm").css("shadowColor", "red");
     }
     else{
      $(".password_confirm_err").hide();
      $("#password_confirm").css("borderColor", "#ced4da");
     }
 }
 
 $(document).ready(function() {
     $("#submit").on("click" , post_data);
  });
 
 