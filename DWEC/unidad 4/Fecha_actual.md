# Objeto Date (fecha) de JavaScript
JavaScript tiene un objeto  Date  integrado que almacena la fecha y la hora y provee de métodos para manejarlos.

Para crear una nueva instancia del objeto Date, utiliza la palabra clave new :
```
const fecha = new Date();
```
El objeto Date contiene un Number(número) que representa los milisegundos pasados desde el Epoch (fecha de referencia), que es el 1 de enero de 1970.  

Puedes convertir una string al constructor Date para crear un objeto con una fecha específica:
```
const fecha = new Date('Jul 12 2011');
```
Para obtener el año actual, utiliza el método de instancia getFullYear() del objeto Date . El método getFullYear() devuelve el año de la fecha especificada en el constructor  Date
```
const añoActual = fecha.getFullYear();
console.log(añoActual); //2020
```
Así mismo, existen métodos para obtener el día y el mes en los que estamos actualmente:
```
const hoy = fecha.getDate();
const mesActual = fecha.getMonth() + 1; 
````
El método getDate() devuelve el día del mes en el que estamos (1-31).

El método getMonth() devuelve el mes de la fecha especificada. Un punto a tener en cuenta acerca del método getMonth() es que devuelve valores indexados (0-11) donde el 0 es enero y el 11 es diciembre. Por tanto, añadiéndole 1 normalizamos el valor del mes.

## Date now

now() es un método estático del objeto Date . Devuelve el valor en milisegundos que representa el tiempo transcurrido desde el Epoch. Puedes pasar los milisegundos devueltos del método now() dentro del constructor Date para crear una instancia de un nuevo objeto Date:
```
const tiempoTranscurrido = Date.now();
const hoy = new Date(tempoTranscurrido);
````
## Formateando Date
Puedes formatear la fecha en múltiples formatos (GMT, ISO, y demás) utilizando los métodos del objeto Date.

El método toDateString() devuelve la fecha en un formato legible por un humano:
```
hoy.toDateString(); // "Sun Jun 14 2020"
```
El método toISOString() devuelve la fecha siguiendo con el Formato Extendido de ISO 8601:
```
hoy.toISOString(); // "2020-06-13T18:30:00.000Z"
```
