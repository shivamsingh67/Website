$(document).ready(function () {
    
    $("#login").click(function (e) { 
        //e.preventDefault();
        var loginFormData = {
            email:$("#email").val(), 
            passwordvalue : $("#password").val()
        }

        $.ajax({
            type: 'POST',
            url: 'phpscript/login.php',
            data: loginFormData,
            success: function (response) {
                //console.log(response);
                if(response){
                    //alert("Welcome to Furntiure Zone. Happy Shopping !!");
                   // window.location.assign('index.html');
                   var url = "index.html?username=" + encodeURIComponent(loginFormData.email);
                   //$('#formId').attr('action', $loginFormData.email);
                   window.location.assign(url);
                }
            }
        });
        e.preventDefault();
    });
});