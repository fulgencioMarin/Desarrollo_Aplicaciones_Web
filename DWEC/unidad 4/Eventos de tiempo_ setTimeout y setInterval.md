# setTimeout
setTimeout() es usada para retrasar la ejecución de la función pasada como argumento por un periodo de tiempo determinado.

Hay dos parámetros que se pasan a setTimeout(): la función que quieres llamar y el tiempo (expresado en milisegundos) a retrasar la ejecución de la función.

Recuerda que hay 1000 milisegundos (ms) en 1 segundo, entonces 5000 ms equivale a 5 segundos y así sucesivamente.

setTimeout() ejecutará la función del primer argumento una vez, tan pronto como haya transcurrido el tiempo especificado.

Ejemplo:
```
let identificadorTiempoDeEspera;

function temporizadorDeRetraso() {
  identificadorTiempoDeEspera = setTimeout(funcionConRetraso, 3000);
}

function funcionConRetraso() {
  alert("Han pasado 3 segundos.");
}
```
Cuando la función temporizadorDeRetraso es llamada, ejecutará setTimeout. Luego que pasen 3 segundos (3000 ms), ejecutará funcionConRetraso que mostrará una alerta.

# setInterval

Usa setInterval() para hacer que una función se repita con un tiempo de retraso entre cada ejecución.

Una vez más, se pasan dos parámetros a setInterval(): la función que quieres llamar y el tiempo en milisegundos a retrasar cada ejecución de la función.

setInterval() continuará ejecutándose hasta que sea borrada.

Ejemplo:
```
let identificadorIntervaloDeTiempo;

function repetirCadaSegundo() {
  identificadorIntervaloDeTiempo = setInterval(mandarMensaje, 1000);
}

function mandarMensaje() {
  console.log("Ha pasado 1 segundo.");
}
```
Cuando tu código llama a la función repetirCadaSegundo, ejecutará setInterval. 
setInterval correrá la función mandarMensaje cada segundo (1000 ms).
