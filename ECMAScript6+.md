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

### 2.1. Default params

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
//ES6
function newFuntion2(name = 'Oscar', age = 32, country = 'MX'){
    console.log(name, age, country);
}

newFuntion2(); //Oscar, 32, MX
newFuntion2('Tim', 30, 'RU'); // Tim, 30, RU
```

### 2.2. Concatenación o template literals

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
//ES6
let phrase2 = `${hello} ${world}`;
console.log(phrase2); //Hello World!
```
## 3. Multilínea, Spread Operator, Desestructuración, Let, Const

### 3.1 Multilínea

Anteriormente para hacer un salto de línea se tenía que usar los símbolos: **\n**

```js
let lorem = "Some epic phrase \n"
+ "another epic phrase.";

console.log(lorem);
//Some epic phrase
//another epic phrase.
```

Ahora en ES6, usando comillas francesas, para representar un salto de línea simplemente se debe hacer ENTER, y está será representada en el resultado.

```js
//ES6
let lorem2 = `Some epic phrase
another epic phrase.
`;

console.log(lorem2);
//Some epic phrase
//another epic phrase.
```

### 3.2. Desestructuración

Vamos a establecer un objeto *person*:

```js
let person = {
    'name': 'Oscar',
    'age': 32,
    'country': 'MX'
}
```

para acceder a los datos del objeto se tendría que ir recorriendo cada uno:

```js
//Antes
console.log(person.name, person.age); //Oscar, 32
```

Sin embargo con desestructuración se puede crear variables para cada uno de los elementos de manera mas clara e intuitiva:

```js
//ES6
let {name, age} = person;
console.log(name, age); //Oscar, 32
```

### 3.3. Operador de propagación (Spread Operator)

El operador de propagación (**...**) nos permite unir uno o mas arreglos sin la necesidad de escribir todo el arreglo.

```js
let tema1 = ['Oscar', 'Julian', 'Tim'];
let team2 = ['Valera', 'Yesica', 'Kim'];

//ES6
let school = ['Roger', ...tema1, ...team2];

console.log(school);
/*
[
  'Roger',  'Oscar',
  'Julian', 'Tim',
  'Valera', 'Yesica',
  'Kim'
]
*/
```

### 3.4. let

Podemos usar **let** para declarar variables, sin embargo let tiene un alcance *local*. **var**, se seguirá usando para declarar variables sin embargo estas variables serán *globales*.

```js
{
    var globalVar = "Global var";
}

{
    let globalLet = "Global Let"
    console.log(globalLet); //Global Let
}

console.log(globalVar); //Global var

console.log(globalLet); //ReferenceError: globalLet is not defined
```

### 3.5. const

**cosnt** sirve para asignar valores constantes, es decír que no van a cambiar. Si un valor es asignado con **const**, ya no será posible hacer una reasignación, cosa que si se puede hacer cuando se usa **var** y **let**.

```js
const a = 'b';
console.log(a); //b

a = 'a';
console.log(a); //TypeError: Assignment to constant variable.
```





















