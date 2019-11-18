$(document).ready(function () {

    console.log("DOM ready!");

    $("form").on("submit", function (event) {
        event.preventDefault();
        var test = true;
        var text = "";
        
        if (document.getElementById("NOM").value.length < 5 || document.getElementById("NOM").value == "" )

         text = "Nom";


        if (document.getElementById("Prenom").value.length < 5 || document.getElementById("Prenom").value == "")

          text = text + ", Prénom";


        if (document.getElementById("Addresse").value.length < 5 || document.getElementById("Addresse").value == "")

          text = text + ", Adresse";


        if (document.getElementById("Email").value.length < 5 || document.getElementById("Email").value == "")

          text = text + ", Email";

        if (text == "") {
         $(".modal-body").html('ok');

        } 
    else {
        $(".modal-body").html(text + 'Veuillez remplir tous les champs');
    }
    $('#myModal').modal("show");

});
});