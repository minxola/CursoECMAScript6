/*
1.1.    DEFAULT PARAMS
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
1.2.    TEMPLATE LITERALS (Concatenación)
*/

let hello = "Hello";
let world = "World!";
let phrase = hello + ' ' + world;
console.log(phrase); //Hello World!

//ES6
let phrase2 = `${hello} ${world}`; //Hello World!

