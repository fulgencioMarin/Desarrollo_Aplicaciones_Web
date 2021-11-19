//01. Usando un bucle for escribir un script que pida un valor entero y muestre en pantalla una lista de números desde el 0 al valor tecleado. 
//Los números se separarán por comas.  

let contar, max, msg='';
max = parseInt(prompt("Teclear un número entero"));
for(contar = 0; contar < max;  contar++)
{
msg += contar + ", ";
}
msg += contar;   //Evita la coma al final
alert(msg);
 
//02. Este script debe escribir la tabla de multiplicar del número que el usuario teclee.
//La tabla mostrará en diferentes líneas cada producto y el resultado en la forma a x b = ab.
//Recuerda que el salto de linea es el carácter "\n"         

 let base, contador, prefijjo, producto, msg='';
base = parseInt(prompt("Tabla del..."));
prefijo = base + " X ";
for (contador = 1; contador <= 10; contador++)
{
producto = base*contador;
msg +=  prefijo + contador + " = " + producto + "\n";
}
alert("Tabla del "+base +"\n"+msg)

//03. Se trata de que dado un número entero el script muesre una cuenta atrás, es decir, una lista de numeros separados por coma desde el número tecleado hasta el 0.

let contar, max, msg='';
max = parseInt(prompt("Teclear un número entero"));
for(contar = max; contar > 0;  contar--)
{
msg += contar + ", ";
}
msg += contar;   //Evita la coma al final
alert(msg);

//04. Se quiere un bucle que genere una lista con todos los números pares positivos por debajo del número tecleado por el usuario. 
//Los números se aparecerán en una ventana alert con cambios de linea (carácter '\n').

let contar, max, msg='';
max = parseInt(prompt("Teclear un número entero"));
for(contar = max; contar > 0;  contar--)
{
msg += contar + ", ";
}
msg += contar;   //Evita la coma al final
alert(msg);
   
05.//En este ejercicio mezclamos bucles on condicionales: el usuario escribe un número y el script imprimirá (console.log) 
//todos los números menores que al dividirlos por 3 den como resto 2.
//Recuerda: un número es múltiplo de N es cuando el dividirlo por N el resto es 0.
         
let max, control;
max = parseInt(prompt("Número máximo "));
for (control = 0; control < max; control++)
 {
    if( control % 3 == 2){
        console.log(control);
    }
}
 
//06. Se quiere tener un contador de dos dígitos en base 5. El funcionamiento es simple: el dígito de la derecha irá aumentando y cuando pase de 4 su valor se pondrá a 0 y el dígito de la izquierda se incrementa en 1.
//El contador debe deternerse cuando alcancemos el valor 1:4

 let izq, der;
for(izq = 0; izq < 2; izq++){
    for(der=0; der < 5; der++){
       console.log(izq+" : "+der)
     }
 }
 
         
         
