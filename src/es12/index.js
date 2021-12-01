/*
13. ECMAScript 12 o ECMAScript 2021
*/

//13.1 REPLACE ALL
const str = "JavaScript es maravilloso, con JavaScript puedo crear le futuro de la web";

//Usando Replace, solo reemplaza el primer elemento
const replaceStr = str.replace("JavaScript", "Python");

console.log(replaceStr);
//Python es maravilloso, con JavaScript puedo crear le futuro de la web


//Usando replaceAll()
const string = str.replaceAll("JavaScript", "Python");

console.log(string);
//Python es maravilloso, con Python puedo crear le futuro de la web

//13.2. METODOS PRIVADOS
class Message {
    show(val){
        console.log(val);
    };
}

const message = new Message();
message.show("Hola"); //Hola

//Agregando # para hacerlo un método privado
//El método solo podrá ser accedido dentro de la clase
class Message {
    #show(val){
        console.log(val);
    };
}

const message = new Message();
message.show("Hola"); //message.show is not a function

//13.3. PROMISE ANY
const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));
//2

//13.4. WeakRef (Referencia debil)
class anyClass {
    constructor(element){
        this.ref = new WeakRef(element);
    }
    {
        //more code
    }
}

//13.5. Operadores de asignación
//AND LÓGICO    x &&= y  es x && (x = y)
let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse); //false

//OR LOGICO    x ||= y  es x || (x = y)
let isTrue = true;
let isFalse = false;
console.log(isTrue ||= isFalse); //true

//NEGACIÓN LOGICA    x ??= y  es x ?? (x = y)
let isTrue = undefined;
let isFalse = false;
console.log(isTrue ??= isFalse); //false