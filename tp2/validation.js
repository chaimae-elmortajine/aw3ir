function validation()
{var x =document.getElementById("nom").value.length;
var y=document.getElementById("nom").value;
    if(x >= 5){
        
        document.getElementById("nom").style.display ="le champs doit contenir au moins 5 caractéres";
    }
    if(y="")
    {
        document.getElementById("nom").style.display="la saisie du mot est obligatoire";

    }
    else{
        document.getElementById("nom").style.display="bienvenue "+ y;
    }
    document.getElementById("error").innerHTML = text;
}