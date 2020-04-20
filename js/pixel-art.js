var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    cambioColor.style.backgroundColor = colorActual;

  })
);

//Paso 1 seleccionar elementos del DOM

var paleta = document.getElementById("paleta");

var grillaPixeles = document.getElementById("grilla-pixeles");

//paso 2 Generar la paleta de colores en pantalla 

function recorrerListaColores (){

  for (var i = 0; i < nombreColores.length; i++){
    var color = document.createElement("div");
    color.style.backgroundColor= (nombreColores[i]);
    color.className = ("color-paleta");
    paleta.appendChild(color);
  }
}
recorrerListaColores();


//Paso 3 crear la grilla de pixeles

function grillaPix (){

  for(var i = 0; i < 1750; i++) {
    var caja = document.createElement("div");
    caja.className = ("grilla-de-pixeles")
      grillaPixeles.appendChild(caja);
    }
}
grillaPix();


//permita al usuario seleccionar un color de la paleta. id= indicador-de-color

  var cambioColor = document.getElementById('indicador-de-color');

  paleta.addEventListener("click",cambiarColor);

  function cambiarColor(){
    cambioColor.style.backgroundColor = event.target.style.backgroundColor;
  }


  //Pintá un pixel de la grilla
  
  //var colorPixel = document.getElementById("indicador-de-color");
 
  grillaPixeles.addEventListener("click", cambiarColorPixel);

  function cambiarColorPixel(e){
    e.target.style.background = cambioColor.style.backgroundColor ;
    //console.log(e)    
  }

  //Paso 4: Detectá si el Mouse está Apretado o no

  var btnClick  = false;

  grillaPixeles.addEventListener("mousedown", apretar);
  grillaPixeles.addEventListener("mouseup", suelto);
  grillaPixeles.addEventListener("mouseover", mover);
  
  function apretar(e){
    btnClick=true;
  }
  
  function suelto(e){
    btnClick=false;
  }
  
  function mover(e) {
    if (btnClick) {
      cambiarColorPixel(e);
  }
  }
//Permití borrar la pantalla apretando un botón


$( "#borrar" ).click(function() {
  $(".grilla-de-pixeles").animate({"background-color": "#ffffff"},1500);
});

//Cargá a los superhéroes en forma de píxele

$("#batman").click(function(){
  cargarSuperheroe(batman);
});

$("#wonder").click(function(){
  cargarSuperheroe(wonder);
});

$("#flash").click(function(){
  cargarSuperheroe(flash);
});

$("#invisible").click(function(){
  cargarSuperheroe(invisible);
});

//Habilitá la descarga de cada obra de arte

$("#guardar").click(function(){
  guardarPixelArt();
})

