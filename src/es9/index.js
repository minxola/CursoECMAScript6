/*
9. ECMA SCRIPT 9: CARACTERISTICAS
*/

//9.1. OPERADOR DE REPOSO

const obj = {
    name: 'oscar',
    age: 32,
    country: 'MX',
};

let {name, ...all} = obj;
console.log(name, all); //oscar { age: 32, country: 'MX' }

let {country, ...others} = obj;
console.log(others); //{ name: 'oscar', age: 32 }

let {age, ...more} = obj;
console.log(more); //{ name: 'oscar', country: 'MX' }

//9.2. UNIÓN DE OBJETOS

const obj = {
    name: 'Oscar',
    age: 32,
}

const obj1 = {
    ...obj,
    country: 'MX',
}

console.log(obj1); //{ name: 'Oscar', age: 32, country: 'MX' }

//9.3. OBJECT FINALLY
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout (() => resolve ('Hello World!'), 5000)
            : reject (new Error('Test Error'))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizó'))

//9.4. RegEx (REGULAR EXPRESIONS)
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