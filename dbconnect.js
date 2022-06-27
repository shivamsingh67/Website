$(document).ready(()=>{
    $.ajax({  
        type:"POST",  
        url:'phpscript/dbconnection.php',  
        success:function(data){  
            alert("Welcome to HOME Furniture Zone"); 
           // window.location.href="http://localhost/webproject/pages/signup.html"; 
        }  
        }); 
})