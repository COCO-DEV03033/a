


$(document).ready(function() {

$("#logout").click(function (){
    localStorage.removeItem("this_token");
});

 $("#room_name").on("keypress",function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      $(".next_step").click();
    }
  });


    $.ajax({
        url: "api/admin/newuserlist",
        type: "POST",
        data :{
            me : localStorage.getItem("this_token")
        },
        success: function( res ) {    
           $("#myname").html(res.me.username);
        }
    });


    $(".next_step").on("click", function(){
      
        $.ajax({
            url: "api/user/create_room",
            type: "POST",
            data :{
                me : localStorage.getItem("this_token"),
                roomName : $("#room_name").val()
            },
            success: function( res ) {    
                window.location.href = '/join/' + $("#room_name").val();
            }
        });   
    })
 });



