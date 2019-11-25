$( document ).ready(function() {

    
    console.log("DOM ready!");
    
    
    $('#gps').click(function () {

        $('#map').html(getLocation());
    });

   
    $('#name').keyup(function() {
 
        

        var nombreCaractere = $(this).val().length;
        
        var msg =   nombreCaractere + ' car.';
        $('#compt1').text(msg);
      
       })


    $('#firstname').keyup(function () {

        var nombreCaractere = $(this).val().length;

        var msg = nombreCaractere + ' car.';
        $('#compt').text(msg);

    });
});