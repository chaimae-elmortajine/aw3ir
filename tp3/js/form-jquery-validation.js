$(document).ready(function () {


  console.log("DOM ready!");

  var NOM = $("#NOM"); var Prenom = $("#Prenom"); var Datenaissance = $("#Datenaissance"); var Addresse = $("#Addresse"); var Email = $("#Email");

  $("#valider").on("click", (event) => {

    var test = (verifyInput(NOM.val(), Prenom.val(), Datenaissance.val(), Addresse.val(), Email.val())) ? false : true;

    console.log(test);

    if (test) {

      $(".modal-title").html("Bienvenue " + Prenom.val());

      $(".modal-body").html(" Vous êtes  nés le " + Datenaissance.val()
        + " et vous habitez : " + ''
        + '<a href="http://maps.google.com/maps?q=' + Addresse.val()
        + '"> <img src="https://maps.googleapis.com/maps/api/staticmap?markers=' + Addresse.val()
        + '&zoom=14&size=400x300&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg" alt="carte" style="width:100%">' + Addresse.val());

    } else {

      $(".modal-title").html("Erreur !"); $(".modal-body").html("Veuillez remplir tous les champs obligatoires..");
    }

    $("#myModal").modal("show");
  });

  verifyInput = (NOM, Prenom, Datenaissance, Addresse, Email) => {
    return NOM == "" | Prenom == "" | Datenaissance == "" | Addresse == "" | Email == "";
  }

});