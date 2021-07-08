//Fade effect to sections
$("ul li:first-child").click(function(){
    $("#intro").fadeOut("fast");
    $("#intro").fadeIn(2000);
});
$("ul li:nth-child(2)").click(function(){
    $("#about").fadeOut("fast");
    $("#about").fadeIn(2000);
});
$("ul li:nth-child(3)").click(function(){
    $("#products").fadeOut("fast");
    $("#products").fadeIn(2000);
});
$("ul li:nth-child(4)").click(function(){
    $("#contact").fadeOut("fast");
    $("#contact").fadeIn(2000);
});
// Check validation
(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Get the forms we want to add validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();