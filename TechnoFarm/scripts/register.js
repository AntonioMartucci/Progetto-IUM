/**
 *
 */
var bemail = false;
var bpassword = false;
var reppassword= false;

function avviso(id,mex){
    $("#"+id).html(mex);
    $("#"+id).fadeIn("slow");
    $("#"+id).delay(1000).fadeOut("slow");
}

function controlla(){
    verificaEmail();
    verificaPassword();
    verificaPassword2();

    if(bemail && bpassword && reppassword){
        location.replace("userPage.html");
        salvaUtente();
    }
}

function salvaUtente(){
    localStorage['nomeUtente'] =  $("#nomeUtente").val();
    localStorage['login'] = 'true';
}

function verificaEmail()
{
    var email = $("#defaultForm-email1").val();


    if(email.length == 0){
        avviso("erroreRegmail","Il campo è obbligatorio");
        bemail= false;
        return;
    }
    var emailV=/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w+)+$/;
    if(String(email).match(emailV))
    {
        localStorage['emailUtente'] = email;
        bemail= true;
    }
    else
    {
        avviso("erroreRegmail","La mail non rispetta i canoni");
        bemail= false;
    }
}

function verificaPassword()
{

    var pass=$("#defaultForm-pass1").val();
    if(pass.length==0){
        avviso("erroreRegpass","Il campo non può essere nullo");
        bpassword= false;
        return;
    }
    if(pass.length > 20){
        avviso("erroreRegpass","La lunghezza deve essere inferiore a 20");
        bpassword= false;
        return;
    }
    var passv=/^[0-9a-zA-Z]+$/;
    if(String(pass).match(passv))
    {
        localStorage['passwordUtente'] = pass;
        bpassword=true;
    }
    else
    {
        avviso("erroreRegpass","La password non rispetta i canoni");
        bpassword=false;
    }
}

function verificaPassword2()
{
    var pass=$("#defaultForm-pass1").val();
    var pass2=$("#defaultForm-pass2").val();
    if(pass == pass2){
        reppassword=true;

    }else{
        avviso("erroreRegpass2","La password non corrisponde");
        reppassword=false;
    }
}