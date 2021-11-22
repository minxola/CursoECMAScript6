/*
ECMAScript 8, que se implementó
*/
//8.1. OBJECT.ENTRIES
//Nos devuelve la clave y valores de matriz
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

//8.2. OBJECT.VALUES
const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana',
}

const values = Object.values(data);
console.log(values); //[ 'Oscar', 'Isabel', 'Ana' ]
console.log(values.length); //3

//8.3. PADDING
const string = 'Hello';
console.log(string.padStart(7, 'Hi')); //HiHello
console.log(string.padEnd(12, '_____')); //Hello_____

//8.4. TRAILING COMMA
const data = {
  frontend: 'Oscar',
  backend: 'Isabel',
  design: 'Ana',
}