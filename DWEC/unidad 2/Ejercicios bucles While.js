//01. Usando un bucle while escribir un script que pida un valor entero y cree una lista con los números desde el 0 al valor tecleado. 
//Luego deberá sacar esa lista con un alert. Los números se separarán por comas. 

let max, contar, lista;
max = parseInt(prompt("Teclear un número"));
contar = 0;
lista ='';
while(contar<max){
    lista += contar+', ';
    contar++;
}
lista += contar;
alert(lista);
 
//02. Se trata de pedir al usuario que teclee un número entre 1 y 5, si escribe alguno que esté fuera de ese rango deberá volver a pedir el número

 let min = 1, max = 5, numero=0;
while (numero <1 || numero >5){
   numero = parseInt(prompt("Teclee un número entre 1 y 5"));
}

//03. Un script que preguntará al usuario si desea continuar con el programa. 
//Si el usuario pulsa una letra n (mayúscla o minúscula), el programa finalizará. Cualquier otra entrada repetirá la pregunta

let resp;
while (resp != 'n' && resp != 'N'){ 	  	 	
     resp = prompt("¿desea seguir con el programa?");
     }
alert("Programa finalizado"); 
         
//05. Escribir un script que pida al usuario una contraseña. 
//Si coincide le devolverá el mensaje "Acceso concedido" y si no coincide le deolverá el mensaje "Acceso Denegado" . 
//Solo falla tres veces se emitirá el mensaje "Alerta, intruso"

let clave, veces = 0, acceso = "pasar", msg;
while (clave != acceso && veces < 3){
     clave = prompt("Teclee su clave");
    if (clave == acceso){
         alert("Acceso concedido")
    }
    else{
         alert("Acceso denegado")
        veces++;
    }
}
if (veces == 3){
     alert("Alerta Intruso");
}

//06. En este script se pedirá al usuario que teclee un número cada vez. 
//El proceso acaba cuando teclee un 0 en cuyo caso además mostrará la suma de todos los números tecleados.

let numero=1, suma=0;
while (numero !=0){
    numero = parseInt(prompt("Teclee un número"));
    suma += numero;
}
alert("la suma de todos los números es "+suma);
         
//07. Este script muestra un menu de opciones: 1- Leer datos. 2- Mostrar datos 3- Fin. El usuario deberá teclear uno de ellos y el programa mostrará la opción elegida. 
//Si teclea un valor fuera del menus se mostrará un mensaje de error y se vuelve a pedir un número de opción. 
//El programa finaliza al teclear el 3.         

let opcion, msg;
msg = "1- Leer datos \n 2- Mostrar Datos \n 3- Fin";
while (opcion !=3){
    opcion = parseInt(prompt("Elegir opcion\n"+msg));
    switch (opcion){
       case 1:
              alert("Opción: Leer datos");
              break;
       case 2:
              alert("Opción: Mostrar datos");
              break;
       case 3:
              alert("Opción: Finalizar");
              break;
      default:
              alert("Error, opción incorrecta");
      }
}

//08. Este script le pide al usuario que vaya tecleando números una y otra vez, pero solo números pares, 
//en caso de que teclee un número impar el programa acabará y dirá la cantidad de números pares ingresados (el 0 cuenta como par).

let numero=0, total=0;
while(numero % 2 ==0){
    numero = parseInt(prompt("Teclee un numero"));
   total ++;
}
total--;
alert("Ha ingresado en total "+ total+" numeros pares");
         




         
         
