$(document).ready(function () {
    $("#signup").click(function (e) { 
        alert("signup button clicked");
        var firstname = $("#fname").val();
        var lastname = $("#lname").val();
        var emailid = $("#email").val();
        var mobilevalue = $("#mobile").val();
        var passwordvalue = $("#password").val();
        var formdata = {
            fname:firstname, 
            lname:lastname, 
            email:emailid, 
            password:passwordvalue,
            mobile:mobilevalue
        };
        alert(formdata.fname);
        $.ajax({
            type: "POST",
            url: 'phpscript/signup.php',
            data: formdata,
            }).done(function (response) {
                console.log(response);
                if(response){
                    //alert("Welcome to Furntiure Zone. Happy Shopping !!");
                    window.location.replace('index.html');
                    
                }
            });
        //e.preventDefault();
    });
});