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

Anteriormete para hacer concatenación se debía usar el simbolo `+` y ademas agregar el espacio correspondiente entre comillas `' '`.

```js
let phrase = hello + ' ' + world;
console.log(phrase); //Hello World!
```

Ahora con las nuevas características de ES6 usando las comillas francesas , podemos establcer plantillas donde irán las variables, creando así una concatenación mas simple e intuitiva.

```js
//ES6
let phrase2 = `${hello} ${world}`;
console.log(phrase2); //Hello World!
```
## 3. Multilínea, Spread Operator, Desestructuración, Let, Const

### 3.1 Multilínea

Anteriormente para hacer un salto de línea se tenía que usar los símbolos: **`\n`**

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

El operador de propagación **`...`** nos permite unir uno o mas arreglos sin la necesidad de escribir todo el arreglo.

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

Podemos usar **`let`** para declarar variables, sin embargo **let** tiene un alcance *local*. **`var`**, se seguirá usando para declarar variables sin embargo estas variables serán *globales*.

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

**cosnt** sirve para asignar valores constantes, es decír que no van a cambiar. Si un valor es asignado con **`const`**, ya no será posible hacer una reasignación, cosa que si se puede hacer cuando se usa **`var`** y **`let`**.

```js
const a = 'b';
console.log(a); //b

a = 'a';
console.log(a); //TypeError: Assignment to constant variable.
```



## 4. Parametros en objetos, arrow functions, promesas

### 4.1. Parametros en objetos

Nos permite crear objetos de una manera mas amigable.

```js
let name = 'Oscar';
let age = 32;

//ES5
obj = {name: name, age: age};
console.log(obj); //{ name: 'Oscar', age: 32 }

//ES6
obj2 = {name, age};
console.log(obj2);//{ name: 'Oscar', age: 32 }
```

### 4.2. Arrow functions

Las **arrow functions** o **funciontes flecha** son funciones anónimas. Permiten crear funciones de una manera mucho mas amigable y entendible.

Veamos el siguiente arreglo de objetos:

```js
const names = [
    {name: 'Oscar', age: 32}
    {name: 'Tim', age: 22}
]
```

Para hacer una lista de los nombres de los objetos del arreglo, se debería usar un metodo **map**, el cual hace uso de una función anónima para acceder a cada uno de los objetos:

```js
let listOfNames = names.map(function(item){
    console.log(item.name); 
})
```

Esta lista se puede simplificar haciendo uso de las funciones flecha, veamos:

```js
let listOfNames2 = names.map(item => console.log(item.name));
```

Las funciones flecha pueden tener varios parámetros:

```js
const listOfNames3 = (name, age, country) => {
    //code goes here...
}
```

También pueden tener solo un parámetro, lo cual simplifica aún mas el arreglo:

```js
const listOfNames4 = name => {
    //code goes here...
}
```

Por ejemplo podríamos crear una función que eleva a un número al cuadrado de la siguiente manera:

```js
const square = num => num * num;
console.log(square(2)); //4
```

### 4.3. Promises y asincronismo

Mediante las promesas le decimos a JavaScript que algo va a pasar, dandole un **resolve** si se cumple una condición y un **reject** si es que no se cumple. JavaScript no ejecuta el código de manera simultanea, sino que lo hace línea por linea. Mediante las promesas JavaScript queda a la espera de que algo pase y según eso mostrar un mensaje **resolve** o un error **reject**.

```js
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve("Hey!");
        } else{
            reject("Ups!");
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log("Hola"))
    .catch(error => console.log(error));
```

Si ejecutamos el código se obtiene:

```js
//Hey!
//Hola
```

Si a la condición le colocamos *false* se obtendría:

```js
//Ups!
```

## 5. Clases, módulos y generadores

### 5.1. Clases

Las clases de JavaScript proveen una sintaxis mucho más clara y simple para crear objetos y lidiar con la herencia.

Las clases son "funciones especiales", como las expresiones de funciones y declaraciones de funciones, la sintaxis de una clase tiene dos componentes: expresiones de clases y declaraciones de clases.

#### Declaración de clases

Una manera de definir una clase es mediante una **declaración de clase**. Para declarar una clase, se utiliza la palabra reservada `class` y un nombre para la clase.

```js
class Calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}
//se utiliza así:
const calc = new Calculator();
console.log(calc.sum(2,2)); //4
```

Las clases tienen un constructor y uno o mas métodos.

#### Expresión de clase

Una **expresión de clase** es otra manera de definir una clase. Las expresiones de clase pueden ser nombradas o anónimas. El nombre dado a la **expresión de clase** nombrada es local dentro del cuerpo de la misma.

##### Anónima

```js
let Rectangulo = class {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }
};

console.log(Rectangulo.name);
// output: "Rectangulo"
```

##### Nombrada

```js
let Rectangulo = class Rectangulo2 {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }
};

console.log(Rectangulo.name);
// output: "Rectangulo2"
```

### 5.2. Módulos

Nos permite importar código desde otro archivo o módulo:

```jsx
//module.js
const hello = ()=>{
    return 'Hello';
}

export default hello;

//index.js
import { hello } from './module';
hello(); //Hello
```

**Importaciones nombradas**

Puedes importar uno o más objetos o valores utilizando el nombre que se le definió en el módulo y que se haya declarado con la palabra clave `export`. Ejemplo:

```jsx
// module.js
export const myExport = "hola";

// index.js
import { myExport } from "module.js";
```

**Importación predeterminada (default)**

Cuando el módulo tiene una exportación predeterminada (default) omitimos el uso de llaves al momento de importar. Ejemplo:

```jsx
// module.js
function myFunction() {...};

export default myFunction;

// index.js
import myFunction from "module.js";
```

Para importar los dos tipos de exportaciones podemos separarlos por comas. Ejemplo:

```jsx
// module.js
export const myExport = "hola";
function myFunction() {...};

export default myFunction;

// index.js
import myFunction, { myExport };
```

### 5.3. Generador o generator

#### Generador

El objeto `Generator` es retornado por una *función generator* y es conformado tanto el protocolo itereble como el protocolo iterador.

#### Constructor

Este objeto no puede ser instanciado directamente. En su lugar, una instancia del objeto `Generator` puede ser devuelta por una *función generator*.

```js
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

var g = gen(); // "Generator { }"
```

#### Instanciación

`Generator.prototype.next()`

Retorna el valor ofrecido por la expresión `yield`.

```js
function* helloWorld(){
    if(true){
        yield 'Hello, ';
    }
    if(true){
        yield 'World';
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

//Hello,
//world
//undefined
```

Ejemplo de un iterador infinito:

```js
	function* idMaker() {
	    var index = 0;
	    while(true)
	        yield index++;
	}

	var gen = idMaker(); // "Generator { }"

	console.log(gen.next().value); // 0
	console.log(gen.next().value); // 1
	console.log(gen.next().value); // 2
	// ...
```











