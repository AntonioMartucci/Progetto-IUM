var emailU;
var passwordU;
var oldEmail, oldPassword;

function logout(){

    localStorage['login'] = 'false';
    location.replace("index.html");
}

function leMieSerre(){
    location.replace("LeMieSerre.html");
}


function mostraBottoni(){
    var emailU =$("#emailUtente").val();
    var passwordU = $("#passwordUtente").val();

    $('#modificaEmail').css('display', 'block');
    $('#modificaPassword').css('display', 'block');
    $('#annullaModifiche').css('display', 'inline');
    $('#confermaModifiche').css('display', 'inline');
    $('#liEmail').css('display', 'none');
    $('#liPassword').css('display', 'none');
    $('#effettuaModifiche').css('display', 'none');
}

function annulla(){
    $("#emailUtente").text(oldEmail);
    $("#passwordUtente").text(oldPassword);

    $('#modificaEmail').css('display', 'none');
    $('#modificaPassword').css('display', 'none');
    $('#confermaModifiche').css('display', 'none');
    $('#annullaModifiche').css('display', 'none');
    $('#effettuaModifiche').css('display', 'inline');
    $('#liEmail').css('display', 'block');
    $('#liPassword').css('display', 'block');
}

function confermaDati(){
    var emailU =$("#inputEmail").val();
    var passwordU = $("#inputPassword").val();

    $("#emailUtente").text(emailU);
    $("#passwordUtente").text(passwordU);

    $('#modificaEmail').css('display', 'none');
    $('#modificaPassword').css('display', 'none');
    $('#confermaModifiche').css('display', 'none');
    $('#liEmail').css('display', 'block');
    $('#liPassword').css('display', 'block');
    $('#annullaModifiche').css('display', 'none');
    $('#effettuaModifiche').css('display', 'inline');
}

