function validation() {



    this.event.preventDefault();
    var test = true;
    var text = "";
  
  
  
      if (document.getElementById("nom").value.length < 5 || document.getElementById("nom").value == "") 
       
      text = "Nom";
      
    
       if (document.getElementById("prenom").value.length < 5 || document.getElementById("prenom").value == "") 
     
      text = text + ", Prénom";
      
  
       if (document.getElementById("addresse").value.length < 5 || document.getElementById("addresse").value == "") 
     
      text = text + ", Adresse";
      
  
       if (document.getElementById("email").value.length < 5 || document.getElementById("email").value == "") 
        
      text = text + ", Email";
  
     
       if (text.length == 0)
      
      test = false;
      
  
  
  if (test) {
  
     if (text.length > 8)
  
     document.getElementById("error").innerHTML = "Les champs " + text + " doivent contenir au moins cinq caractères!";
  
     else 
  
     document.getElementById("error").innerHTML = "Le champ " + text + " doit contenir au moins cinq caractères!";}
   
  else
  
     document.getElementById("resultat").innerHTML = "Bienvenue " + document.querySelector("#prenom").value + " 😀";
  
  
  }