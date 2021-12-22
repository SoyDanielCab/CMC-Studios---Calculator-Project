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


function resultado()
{

		
		

		decimal = numpantalla.toString(16);	
		
		document.Calculadora.txtboxnros.value = parseInt(numpantalla, 16); //Muestra el resultado en patalla

		pantallaconnumero = "si";
		operapendiente = "";
		

	

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



