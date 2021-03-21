/**
 *
 */
const email = "test";
const password = "password";

function check(bool){
    var login = localStorage['login'];
    if(login == null || login == 'false'){
        return true;
    }else{
        if(bool == true)
            location.replace("userPage.html");
        else
            location.replace("LeMieSerre.html");
    }
}

window.onload = function() {
    checkLogin();
}

function checkLogin(){
    var login = localStorage['login'];
    if(login == null || login == 'false'){
        //return true;
    }else{
        $("#leMieSerre").css("display", "inline");
        $("#bottoneRegistrazione").css("display", "none");
    }
}

function validateForm() {


    var emailUtente =$("#email").val();
    var passwordUtente = $("#password").val();

    var bool = new Boolean(emailUtente == email && password == passwordUtente);

    if(bool == true){
        location.replace("LeMieSerre.html");
        localStorage['login'] = 'true';

        return true;
    }else{
        avvisa("Email o password errate");
        /*setTimeout(function(){
            alert('hello');
        }, 3000);  */

        return false;
    }
}

function avvisa(x){
    $("#errore").text(x);
    $("#errore").fadeIn();
    $("#errore").delay(3000).fadeOut();
}