function validation()
{var x =document.getElementById("nom").value.length;
var y=document.getElementById("nom").value;
    if(x >= 5){
        
        text="le champs doit contenir au moins 5 caractéres";
    }
    if(y="")
    {
        text="la saisie du mot est obligatoire";

    }
    else{
        text="bienvenue "+ y;
    }
    document.getElementById("error").innerHTML = text;
}