/*
ECMAScript 8, que se implementó
*/
//7.1. OBJECT.ENTRIES
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

//7.2. OBJECT.VALUES
const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana',
}

const values = Object.values(data);
console.log(values); //[ 'Oscar', 'Isabel', 'Ana' ]
console.log(values.length); //3

//7.3. PADDING
const string = 'Hello';
console.log(string.padStart(7, 'Hi')); //HiHello
console.log(string.padEnd(12, '_____')); //Hello_____

//7.4. TRAILING COMMA
const data = {
  frontend: 'Oscar',
  backend: 'Isabel',
  design: 'Ana',
}

/*
8.1 ASYNC - AWAIT
*/
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