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
## 3. ES6: Multilínea, Spread Operator, Desestructuración, Let, Const

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



## 4. ES6: Parametros en objetos, arrow functions, promesas

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

## 5. ES6: Clases, módulos y generadores

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

## 6. ES7: Que se implementó en ECMAScript 7

### 6.1. Includes()

Es un metodo que nos ayuda a verificar si existe determinado valor dentro de un array.

```js
let numbers = [1,2,4,7,9];

if(numbers.includes(7)){
    console.log('Si está el valor 7');
} else {
    console.log('No esta el número pedido');
}
```

Como podemos ver podemos hacer ciertas validaciones y crear condicionales haciendo uso del método `inclues`.

### 6.2. Potenciación (pow)

Se añadió otra manera de hacer potencia de un valor numérico, para esto se asigno el doble asterisco `**` como operador de potencia.

```js
let base = 4;
let exponent = 3;
let result = base ** exponent;

console.log(result);//64
```

## 7. ES8: Object (entries, values, keys), padstring, trailing commas

### 7.1. Object.entries

El método `Object.entries()` devuelve una matriz de una propiedad enumerable [key, value] de un objeto dado, en el mismo orden proporcionado por `for...in` (la diferencia es que en un bucle for-in enumera las propiedades en la cadena de prototipos)

```js
const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana',
}

const elementos = Object.entries(data);

console.log(elementos);
/* [ [ 'frontend', 'Oscar' ],
  [ 'backend', 'Isabel' ],
  [ 'design', 'Ana' ] ]
*/

console.log(elementos.length); //3

```

### 7.2. Object.values

El método `Object.values()` devuelve un array con los valores correspondientes a las propiedades **enumarables** de un objeto.

```js
const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana',
}

const values = Object.values(data);

console.log(values); //[ 'Oscar', 'Isabel', 'Ana' ]
console.log(values.length); //3
```

### 7.3. Objects.keys

El método `Object.keys()` devuelve un array de las propiedades `names` de un objeto, en el mismo orden como se obtienen en un loop normal.

```js
const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana',
}
const keys = Object.keys(data);

console.log(keys); //[ 'frontend', 'backend', 'design' ]
console.log(keys.length); //3
```



### 7.4. PadString

#### `padStart`

Rellena una cadena desde el principio con una cadena dada y devuelve un nuevo string con la longitud objetivo.

#### `padEnd`

Rellena un string desde el final con una cadena dada y devuelve un nuevo string con la longitud objetivo.

```js
const string = 'Hello';
console.log(string.padStart(7, 'Hi')); //HiHello
console.log(string.padEnd(12, '_____')); //Hello_____
```



### 7.5. Trailing commas

Las **trainling commas** o comas finales, son útiles cuando se quiere agregar nuevos elementos, parámetros o propiedades al código de JavaScript.

Consiste en agregar literalmente una comma al final: `,`

```js
//arrays
var arr = [1, 2, 3,];

//objects
var object = {
    foo: 'bar',
    baz: 'querty',
    age: 25,
}
```

Las trailing comas no afectan la propiedades de las funciones o los argumentos.

```js
//funciones equivalentes
function myFunct(x){...}
function myFunct(x,){...}
//o también
(x) => {...};
(x,) => {...};
```

De la misma manera pueden usarse en la destructuración y en JSON.

## 8. ES8: async y await

### async

La declaración de función `async` define una función asíncrona, la cual devuelve un objeto `AsyncFunction`.

Es posible definir también funciones asíncronas a través de fun expresión de de función `async`.

Una función `async` puede contener una expresión `await`, la cual pausa la ejecución de la función asíncrona y espera la resolución de la `Promise` pasada y, a continuación, reanuda la ejecución de la función `async` y devuelve el valore resuelto.

### await

El operador `await` es usado para esperar a una `Promise`. Sólo puede ser usado dentro de una función asíncrona `async function`.

```js
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Hello world!'), 5000)
      : reject(new Error('Test Error'))
  })
}

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
}

helloAsync();

//Otra forma de llamar a helloWorld()
const otherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error){
    console.log(error);
  }
};

otherFunction();
```

## ES9, implementación

### 9.1. Rest properties (operador de reposo)

**Rest properties** toma las *keys* de las propiedades enumerables que quedan al momento de hacer **desestructuración**. Las claves y sus valores son copiados en un nuevo objeto.

```js
const obj = {
    name: 'oscar',
    age: 32,
    country: 'MX',
};
//podemos usar uno o mas claves
let {name, ...all} = obj;
console.log(name, all); //oscar { age: 32, country: 'MX' }

//solo usando el objeto others
let {country, ...others} = obj;
console.log(others); //{ name: 'oscar', age: 32 }

//tomando age y dejando lo demás
let {age, ...more} = obj;
console.log(more); //{ name: 'oscar', country: 'MX' }
```

### 9.2. Unión de objetos (spread operator)

**Operador de Reposo**, No es lo mismo que el **spread operator**, ya que en este caso se copian las propiedades de un objeto hacia otro nuevo objeto. El **Spread Operator** ahora se puede usar para hacer generar o unir objetos. También se puede hacer lo mismo con arreglos o arrays.

```js
//spread operator se usa para crear nuevos objetos o arreglos
let a = {x:1, y: 2};
let b = {m:5, ...a};
console.log(b); //{ m: 5, x: 1, y: 2 }
```

### 9.3 Método Finally

El método `finally()` devuelve una `Promise`. Cuando la promesa se resuelve, sea exitosa o rechazada, la función de callback especificada será ejecutada. Esto ofrece una forma de ejecutar código sin impotar que se haya resuelto la promesa.

```js
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout (() => resolve ('Hello World!'), 5000)
            : reject (new Error('Test Error'))
    });
};

helloWorld()
	//Arroja 'Hello World!' luego de 5 segundos
    .then(response => console.log(response))
	//En este caso no se da error, si hubiera: 'Test Error'
    .catch(error => console.log(error))
	//Esta línea se ejecuta al finalizar: 'Finalizó'
    .finally(() => console.log('Finalizó'))
```

### 9.4. RegEx (REGULAR EXPRESIONS)

El método `exec()` ejecuta una búsqueda sobre las coincidencias de una expresión regular en una cadena específica. Devuelve el resultado como *array* o *null*.

Si se encuentran coincidencias, devuelve un array y actualiza las propiedades del objeto de la expresión regular. 

El *array* devuelto contiene:

- Primer elemento: Los elementos encontrados
- Un elemento por cada parte de la expresión regular que se encuentre entre paréntesis y se encuentra dentro del texto que fue capturado.

Si la búsqueda falla, el metodo *exec()* devuelve **null**.

```js
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2021-11-22');
console.log(match); /*
[
  '2021-11-22',
  '2021',
  '11',
  '22',
  index: 0,
  input: '2021-11-22',
  groups: undefined
]
*/
const year = match[1];
const month = match[2];
const day = match[3];

console.log(day, month, year); //22 11 2021
```







