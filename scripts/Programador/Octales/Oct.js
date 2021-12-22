var numpantalla = "0";
var pantallaconnumero = "si"; 
var numespera = 0;
var operapendiente = "";
var solucion = "";
var decimal;



function ingresarnumero(x)
{

	if(pantallaconnumero == "si")
	{
		document.Calculadora.txtboxnros.value = x;
		numpantalla = x;
	}
	else if(pantallaconnumero != "si")
	{
		document.Calculadora.txtboxnros.value += x;
		numpantalla += x;
	}
	
	pantallaconnumero = "no";

}

function ingresaoperacion(y)
{
if(operapendiente == "")
{

	numespera = document.Calculadora.txtboxnros.value;
	document.Calculadora.txtboxnros.value += y;
	operapendiente = y;
	pantallaconnumero = "no";
	numpantalla = "";
	

}

}

function resultado()
{

	if(operapendiente != "") 
	{	
		

		solucion = parseInt(numespera,8) + operapendiente + parseInt(numpantalla,8);

		decimal = eval(solucion); //Linea que convierte el resultado en binario
		
		document.Calculadora.txtboxnros.value = decimal.toString(8); //Muestra el resultado en patalla

		pantallaconnumero = "si";
		operapendiente = "";
		

	}

}

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

function atras(){

	numpantalla = "0";
	pantallaconnumero = "si";
	usarpunto = "no"; 
	numespera = 0;
	operapendiente = "";
	solucion = "";
	document.Calculadora.txtboxnros.value = Calculadora.txtboxnros.value.substr(0, Calculadora.txtboxnros.value.length -1);

}



