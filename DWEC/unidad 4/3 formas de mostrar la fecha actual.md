## 01. Fecha básica con números
Podemos utilizar el siguiente script, para mostrar la fecha en español con números, es decir, en el formato como se escribe en nuestro idioma: dia/mes/año.
```
<script>
  var f = new Date();
  document.write(f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear());
</script>
```

Este script de Javascript lo tenemos que colocar en el cuerpo de la página, en el lugar donde queremos que aparezca la fecha de hoy. Nosotros podremos colocar este script en cualquier contenedor donde queramos que aparezca, como un párrafo, una capa o división, una celda de una tabla, o donde deseemos.

## 02. Fecha con el nombre del mes
Podríamos desear poner la fecha escrita, donde aparezca el nombre del mes con letras, es decir, algo como "9 de noviembre de 2009". Esto quedaría bien si queremos darle un toque más prosaico a la visualización de la fecha actual. Se consigue con un script como este:
```
<script>
  var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
  var f=new Date();
  document.write(f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear());
</script>
```

Como habrás podido comprobar, no tiene ninguna dificultad, pero tenemos que crear un array con los nombres de los meses en español, puesto que en Javascript no tenemos ninguna manera de conseguir esos nombres en nuestro idioma. Nuevamente, colocaremos el script en el lugar donde deseamos que aparezca escrita la fecha.

## 03. Fecha con nombre de mes y nombre de día de la semana
Ahora vamos a darle una vuelta de trueca al anterior script para generar el nombre del día de la semana. El esquema sigue siendo el mismo, pero ahora necesitaremos otro array con los nombres de los días de la semana. Con este script conseguiremos una fecha escrita que será parecida a esta: "Lunes, 9 de Noviembre de 2009".
  ```
  <script>
  var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
  var diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
  var f=new Date();
  document.write(diasSemana[f.getDay()] + ", " + f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear());
</script>
```
