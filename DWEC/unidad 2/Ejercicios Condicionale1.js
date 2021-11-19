
 <script>   
 //01. Se trata de escribir un script que diga si un número es par o es impar.
//Recordemos que un número es par si al dividirlo por 2 da como resto 0.
   
let numero = 18
let resto = numero%2;
if (resto === 0){
    alert(numero+" es par");
}
else{
    alert(numero+" es impar");
}

//02. Un programa que pida un número y diga si es positivo o negativo. El cero se considera positivo


                
var numero = parseInt(prompt("Teclea un  número"));
if (numero>=0){
    alert(numero +" es positivo");
}else{
    alert(numero +" es negativo");
}
 
 //03 En este ejercicio debes pedri dos números enteros y devolver 
 //el cociente de dividir el primero entre el segundo, pero si este es cero no debe hacer la división, sino lanzar un mensaje de error      
 
 
                
var dividendo = parseInt(prompt("Primer numero"));
var divisor  = parseInt(prompt("Primer numero"));
var cociente;
if (divisor != 0){
    cociente = dividendo/divisor;
    alert( dividendo + "/" + divisor + " = " + cociente);
}
else{
   alert("No puedes dividir entre 0");
}

  //04 Este script pide al usuario que teclee una letra entre A, B, C, D. 
  //Si pulsa la letra A en mayúsucla o en minúscula le dará el mensaje de que ha acertado, en caso contrario le dirá que se equivocó...
  
  var letra = prompt("Indica una opción A B C D");


if (letra == 'b' || letra=='B'){
    alert("Pulsaste la B: has acertado");
}else{
    alert("Opción incorrecta");

}

// 05. Una tienda aplica un descuento del 15% para las compras que incluyan más de 10 artículos iguales cuyo precio sea superior a 40 euros. 
//Tu programa debe comprobar y calcular la cantidad a pagar sabiendo el número de artículos y el precio de cada uno.

var articulos, precios, factura, descuento;
articulos = parseInt(prompt("¿Cuántos artículos?"));
precio = parseInt(prompt("¿Cuál es su precio?"));

factura = precio*articulos;

if (articulos > 10 && precio > 40){
    factura = factura*(1-0.15);
};
alert("Total a pagar "+factura);

//06. En ste caso, también suando el perador ternario o if reducido, un visitante a la página deberá teclear su edad, 
//si es igual o mayor de 18 recibirá el mensaje de "Entra" en caso contario deberá decirle los años que tiene que estperar para entrar


                
var edad, msg;
edad = parseInt(prompt("Teclea tu edad"));
msg = (edad >= 18) ? "Entra": "Espera "+ (18-edad)+" años";
alert(msg);
         
//07. En un restaurante los clientes pueden pedir menú de carne, pescado o verdura. Si pide carne se le ofrecerá como bebida vino tinto, si pide pescado se le ofrecerá vino blanco y si pide verdura se le ofrecerá agua
//Si no elije el menú de la lista aparecerá la frase elija carne, pescado o verdura.


                
        let menu, bebida;
menu = prompt("Titpo de menu: carne, pescado, verdura")
switch (menu){
    case 'carne':
        bebida = "¿Desea beber vino tinto?";
        break;
    case 'pescado':
        bebida = "¿Desea beber vino blanco?";
        break;
    case 'verdura':
        bebida = "¿Desea agua?";
        break;
    default:
        bebida = "Elija carne pescado o verdura";
    }
alert(bebida);
         


        
</script>
