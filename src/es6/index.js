/*
2.1.    DEFAULT PARAMS
*/

//antes
function newFuntion(name, age, country){
    var name = name || 'Oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
}

newFuntion(); //Oscar, 32, MX
newFuntion('Tim', 30, 'RU'); // Tim, 30, RU

//ES6
function newFuntion2(name = 'Oscar', age = 32, country = 'MX'){
    console.log(name, age, country);
}

newFuntion2(); //Oscar, 32, MX
newFuntion2('Tim', 30, 'RU'); // Tim, 30, RU

/*
2.2.    TEMPLATE LITERALS (Concatenación)
*/

let hello = "Hello";
let world = "World!";
let phrase = hello + ' ' + world;
console.log(phrase); //Hello World!

//ES6
let phrase2 = `${hello} ${world}`;
console.log(phrase2); //Hello World!

/*
3.1. MULTILINEA
*/
//Antes
let lorem = "Some epic phrase \n"
+ "another epic phrase.";

console.log(lorem);
//Some epic phrase
//another epic phrase.

//ES6
let lorem2 = `Some epic phrase
another epic phrase.
`;

console.log(lorem2);
//Some epic phrase
//another epic phrase.

/*
3.2. DESESTRUCTURACION
*/
let person = {
    'name': 'Oscar',
    'age': 32,
    'country': 'MX'
}

//Antes
console.log(person.name, person.age);
// Oscar, 32

//ES6
let {name, age} = person;
console.log(name, age);
// Oscar, 32

/*
3.3. OPERADOR DE PROPAGACIÓN (Spread Operator)
*/
let tema1 = ['Oscar', 'Julian', 'Tim'];
let team2 = ['Valera', 'Yesica', 'Kim'];

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

/*
3.4. let
*/
{
    var globalVar = "Global var";
}

{
    let globalLet = "Global Let"
    console.log(globalLet); //Global Let
}

console.log(globalVar); //Global var
console.log(globalLet); //ReferenceError: globalLet is not defined

/*
3.5. const
*/
const a = 'b';
console.log(a);

a = 'a';
console.log(a); //TypeError: Assignment to constant variable.

/*
4.1. PARAMETROS EN OBJETOS
*/
let name = 'Oscar';
let age = 32;

//ES5
obj = {name: name, age: age};
console.log(obj); //{ name: 'Oscar', age: 32 }

//ES6
obj2 = {name, age};
console.log(obj2);//{ name: 'Oscar', age: 32 }

/*
4.2. ARROW FUNCTIONS
*/
const names = [
    {name: 'Oscar', age: 32},
    {name: 'Tim', age: 22}
]

let listOfNames = names.map(function(item){
    console.log(item.name);
})

//Las arrow functions son funciones anónimas
let listOfNames2 = names.map(item => console.log(item.name));

//función anónima en forma de arrow function
const listOfNames3 = (name, age, country) => {
    //code goes here...
}

//solo con un elemento o parametro
const listOfNames4 = name => {
    //code goes here...
}

//función que eleva un numero dado al cuadrado en forma de arrow function.
const square = num => num*num;

/*
4.3. PROMISES, para manejar asincronismo
*/
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