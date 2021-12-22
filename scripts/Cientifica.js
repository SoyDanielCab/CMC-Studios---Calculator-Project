
var numpantalla="0"; //Registra los datos que se encuentran en el textbox y se inicializa en 0
var pantallaconnumero="si"; //Interruptor que nos perminte saber si el texbox tiene numeros 
var usarpunto="no"; //Indica si hay algun punto en pantalla 
var numespera=0; //registra el primer numero ingresado en la pantalla
var operapendiente=""; // Analiza los valores agregados para la operación
var solucion="";// Almacena el resultado entre los valores agregados y la operación 
 
function ingresarnumero(x) // Muestra los numeros y el punto en pantalla
{

	//Primero se analiza si el "." ya ah sido presionado
	if(x != "."){ 

		//Verifica si ya hay algún numero en pantalla
		if(numpantalla == "0" || pantallaconnumero == "si") 
			{

				document.Calculadora.txtboxnros.value=x; // Muestra el numero precionado
				numpantalla=x; //Almacena el numero precionado por el usuario

			}

		//Una vez más verifica si el "." fue precionado	
		else if(x!=".") 
			{

				document.Calculadora.txtboxnros.value += x;
				numpantalla += x;

			}
}

// Detecta el momento en que el "." fue precionado
if(x == "." && usarpunto == "no" && numpantalla == "0") 
	{

		document.Calculadora.txtboxnros.value = "0.";// el único valor en la pantalla era 0
		numpantalla = x; // Almacena el numero preccionado
		usarpunto = "si";//La variable usar punto cambia a "Si"

	}	
else if(x == "." && usarpunto == "no")// Si ya existe otro numero que no es 0
	{

		document.Calculadora.txtboxnros.value +=x;
		numpantalla +=x;
		usarpunto="si";

	}
else if(x == "." && usarpunto == "si")
{
	//Si el punto ya fue precionado, la función no hara nada 
}

	// Reiniciamos la función cambiando la variable pantallaconnumero = no
	pantallaconnumero = "no";

}

//Función que registra la operación a realizar
function ingresaoperacion(y) 
{

//Detecta si es la primera vez que se escribe una operación 
if(operapendiente == "")
{
	//EL numero que ya se preciono pasa a la variable numespera
	numespera = document.Calculadora.txtboxnros.value;

	//Se muestra la operación a la pantalla
	document.Calculadora.txtboxnros.value += y;
	operapendiente = y;
	pantallaconnumero = "no";

	//Se limpia la pantalla para recibir el siguiente valor
	numpantalla = "";

	//Se reinicia el filtro del punto
	usarpunto = "no";

}

}

//Función que realiza la operación
function resultado()
{

	//Verifica si hay una operación pendiente
	if(operapendiente != "") 
	{

		//la variable solucion se compone por numespera, opera pendiente y numpantalla 
		solucion = numespera + operapendiente + numpantalla;

		//Se convierte en una operación metematica
		document.Calculadora.txtboxnros.value = eval(solucion);

		//Muestra la solución en la pantalla
		numpantalla = eval(solucion);

		//Reinicia el resto de las variables 
		pantallaconnumero = "si";
		operapendiente = "";
		usarpunto = "no";

	}

}

//Función unica para el boton de raiz
function raiz()
{

	if(operapendiente == "")
	{
		//Realiza la raiz
		document.Calculadora.txtboxnros.value=Math.sqrt(numpantalla);

		//Reinicia el resto de variables
		pantallaconnumero = "no";
		operapendiente = "";
		usarpunto = "no";

	}

}

//Función unica para el boton de tan
function tan()
{

	if(operapendiente == "")
	{
		//Realiza la tangente
		document.Calculadora.txtboxnros.value = Math.tan(numpantalla * Math.PI / 180);

		//Reinicia el resto de variables
		pantallaconnumero = "no";
		operapendiente = "";
		usarpunto = "no";

	}

}

//Función unica para el boton de log
function log()
{

	if(operapendiente == "")
	{
		//Realiza el logaritmo
		document.Calculadora.txtboxnros.value = Math.log(numpantalla)

		//Reinicia el resto de variables
		pantallaconnumero = "no";
		operapendiente = "";
		usarpunto = "no";

	}

}

//Función que borra todo el contenido de la pantalla (AC)
function limpiar()
{

	//Reinicia todas las variables 
	numpantalla = "0";
	pantallaconnumero = "si";
	usarpunto = "no"; 
	numespera = 0;
	operapendiente = "";
	solucion = "";
	document.Calculadora.txtboxnros.value="0";

}

//Función que borra unicamente el ultimo valor de la pantalla (Del)
function atras()
{

	numpantalla = "0";
	pantallaconnumero = "si";
	usarpunto = "no"; 
	numespera = 0;
	operapendiente = "";
	solucion = "";
	document.Calculadora.txtboxnros.value = Calculadora.txtboxnros.value.substr(0, Calculadora.txtboxnros.value.length -1);

}





























































































































    
    
    
