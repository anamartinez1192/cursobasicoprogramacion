var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;

/*var lineas = 30;
var l = 0;
var yi, xf;*/
var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick); /*al no agregar
paréntesis, estamos referenciando la función, solicitando
que se ejecute cuándo ocurra el click, pero si se agregan paréntesis
estamos diciendo ejecútala*/


/*while(l < lineas)
{
  yi = 10 * l;
  xf = 10 * (l + 1);
  dibujarLinea("#AAF", 0, yi, xf, 300);
  /*console.log("lineas "+ l);*/
/*  l = l + 1;
}

/*for(l = 0; l < lineas; l++) así se hace el ciclo for
hacer un do while, hw
{
  yi = 10 * l;
  xf = 10 * (l + 1);
  dibujarLinea("#AAF", 0, yi, xf, 300);
}*/
/*do
{
  yi = 10*l;
  xf = 10 * (l+1);
  dibujarLinea("red",300,xf,yi,0);
  dibujarLinea("red",0,yi,xf,300);
  l++
} while (l<lineas);

dibujarLinea("black", 299, 1, 1, 0);
dibujarLinea("black", 300, 299, 299, 1);
dibujarLinea("black", 0, 1, 1, 299);
dibujarLinea("black", 1, 299, 299, 300);*/

/*dibujarLinea("#AAF", 0, 10, 20, 300);
dibujarLinea("#AAF", 0, 20, 30, 300);*/

/*lienzo.beginPath();
lienzo.strokeStyle = "red";
lienzo.moveTo(50, 10);
lienzo.lineTo(250, 20);
lienzo.stroke();
lienzo.closePath();*/
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function  dibujoPorClick()
{
  var x =parseInt(texto.value);
  var lineas = x;
  var l = 0;
  var yi, xf;
  var espacio = ancho/lineas;

  do
  {
    yi = espacio*l;
    xf = espacio * (l+1);
    dibujarLinea("red",300,xf,yi,0);
    dibujarLinea("red",0,yi,xf,300);
    l++
  } while (l<lineas);


  dibujarLinea("black", 299, 1, 1, 0);
  dibujarLinea("black", 300, 299, 299, 1);
  dibujarLinea("black", 0, 1, 1, 299);
  dibujarLinea("black", 1, 299, 299, 300);

}
