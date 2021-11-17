# Curso de ECMA Script 6+

---
Profesor: Oscar Barajas Tavares
Escuela: JavaScript
Curso de @Platzi
Notas de @minxola

---

## 1. Que es ECMAScript

Es la especificación del lenguaje propuesta por ECMA International, institución encargada de los estandares. JavaScript es el lenguaje de programación que utiliza esta especificación para trabajar sobre las caracteristicas añadidas a partir de la versión 6 en el 2015.

Cada versión lanza nuevas caracteristicas a partir de 1996. En el 2015 empezaron a lanzar nuevas caracteristicas y versiones. Las versiones salen en Junio de cada año.

## 2. ECMA Script 6: Default params y concatenación

> Para ejecutar bloques de código debemos instalar la aplicación **Code Runer** en *Visual Studio Code*.

### Default params

En ES6 se implementó una nueva manera de establecer parametros por defecto:

Anteriormente se hacía usando el operador OR, si el parámetro no se especificaba se tomaba el parametro por defecto.

```js
function newFuntion(name, age, country){
    var name = name || 'Oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
}

newFuntion(); //Oscar, 32, MX
newFuntion('Tim', 30, 'RU'); // Tim, 30, RU
```

En ES6 los parametros por defecto se declaran en los argumentos de la función:

```js
function newFuntion2(name = 'Oscar', age = 32, country = 'MX'){
    console.log(name, age, country);
}

newFuntion2(); //Oscar, 32, MX
newFuntion2('Tim', 30, 'RU'); // Tim, 30, RU
```

### Concatenación o template literals

Nos permite hacer concatenación de una manera mas simple e intuitiva.

```js
let hello = "Hello";
let world = "World!";
```

Anteriormete para hacer concatenación se debía usar el simbolo + y ademas agregar el espacio correspondiente entre comillas ' '.

```js
let phrase = hello + ' ' + world;
console.log(phrase); //Hello World!
```

Ahora con las nuevas características de ES6 usando las comillas francesas podemos establcer plantillas donde irán las variables, creando así una concatenación mas simple e intuitiva.

```js
let phrase2 = `${hello} ${world}`;
console.log(phrase2); //Hello World!
```



















