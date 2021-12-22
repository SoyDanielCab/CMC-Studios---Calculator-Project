var numpantalla="0";
var pantallaconnumero="si"; 
var usarpunto="no"; 
var numespera=0;
var operapendiente="";
var solucion="";


//Función que nos permite ingresar numeros en pantalla
function ingresarnumero(x)
{
	if(x != "."){

		if(numpantalla == "0" || pantallaconnumero == "si")
			{
				document.Calculadora.txtboxnros.value=x;
				numpantalla=x;
			}
		else if(x!=".")
			{
				document.Calculadora.txtboxnros.value += x;
				numpantalla += x;
			}
}

if(x == "." && usarpunto == "no" && numpantalla == "0")
	{
		document.Calculadora.txtboxnros.value = "0.";
		numpantalla = x;
		usarpunto = "si";
	}	
else if(x == "." && usarpunto == "no")
	{

		document.Calculadora.txtboxnros.value +=x;
		numpantalla +=x;
		usarpunto="si";
	}
else if(x == "." && usarpunto == "si")
{

}

	pantallaconnumero = "no";

}


//Función que nos permite ingresar operaciones en pantalla
function ingresaoperacion(y)
{
if(operapendiente == "")
{

	numespera = document.Calculadora.txtboxnros.value;
	document.Calculadora.txtboxnros.value += y;
	operapendiente = y;
	pantallaconnumero = "no";
	numpantalla = "";
	usarpunto = "no";

}

}


//Función que nos regresa el resultado de la operación agregada 
function resultado()
{

	if(operapendiente != "") 
	{

		solucion = numespera + operapendiente + numpantalla;
		document.Calculadora.txtboxnros.value = eval(solucion);
		numpantalla = eval(solucion);
		pantallaconnumero = "si";
		operapendiente = "";
		usarpunto = "no";

	}

}


//Función que limpia por completo la pantalla (AC)
function limpiar()
{

	numpantalla = "0";
	pantallaconnumero = "si";
	usarpunto = "no"; 
	numespera = 0;
	operapendiente = "";
	solucion = "";
	document.Calculadora.txtboxnros.value="0";

}


//Función que borra solo un elemento de la pantalla (Del)
function atras(){

	numpantalla = "0";
	pantallaconnumero = "si";
	usarpunto = "no"; 
	numespera = 0;
	operapendiente = "";
	solucion = "";
	document.Calculadora.txtboxnros.value = Calculadora.txtboxnros.value.substr(0, Calculadora.txtboxnros.value.length -1);

}





























































    
    
    
