
function allow(k) {

    var email = $("#email"+k).text().trim();

    $.ajax({
        url: "api/admin/allowOne",
        type: "POST",
        data :{
            email
        },
        success: function( res ) {    
            $("#" + k).html("<button class='btn badge-success btn-small'>allowed</button>");
            $("#snackbar").html("You allowed one user!");
            $("#snackbar").addClass("show");
             setTimeout(function(){  $("#snackbar").removeClass("show"); }, 5000);

        }
    });
}


$(document).ready(function() {
    $.ajax({
        url: "api/admin/newuserlist",
        type: "POST",
        data :{
            me : localStorage.getItem("this_token")
        },
        success: function( res ) {    

            $("#allusers").html(res.AllUsers);
            $("#allrooms").html(res.AllRooms);


           var insertTable = "";
           const newUsers = res.newUsers;

           $("#myname").html(res.me.username);

          for(var k=0; k<newUsers.length;k++)
          {
           var num = newUsers[k].createdAt.indexOf("T");
           var date = newUsers[k].createdAt.slice(0,num);
            insertTable += "<tr><td>" +( k+1) +"</td><td>" +newUsers[k].username + "</td><td id='email"+k+"'>"+newUsers[k].email + "</td><td>" +newUsers[k].address + "</td><td>" + date + "</td><td id='"+ k +"'><button onclick='allow("+ k +")' class='btn badge-warning btn-small'>Not allowed</button></td></tr>";
          }

          $("#newuserList").html(insertTable);
        }
    });

    $("#logout").click(function (){
        localStorage.removeItem("this_token");
    });
 });



