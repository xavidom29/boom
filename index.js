//  FUNCIONES


function countdown(nombre) {

  var myVar = setInterval(function(){
    document.querySelectorAll('#contenedor')[0].innerHTML = "<div>" + nombre -- + "</div>";
    if (nombre == -1) {

      clearInterval(myVar);

      document.querySelectorAll('#contenedor')[0].innerHTML = '<img src="1.jpg">'

      setTimeout(function(){ alert("B O O M"); }, 30);

    }

  }, 1000);


  //setInterval(function(){document.querySelectorAll('#contenedor')[0].innerHTML = console.log(nombre --); }, 1000);

  //  setInterval(function(){ alert("B O O M !!!! "); }, nombre);



 }






// VARIABLES
const botonAnadir = document.querySelectorAll('#boton')[0];

// BINDS Y EVENTOS
botonAnadir.addEventListener('click', function() {
  let time = document.querySelectorAll('#input')[0].value;
  countdown(time);
})
