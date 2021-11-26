/*
10. ES 10, IMPLEMENTACIONES
Junio 2019
*/
//10.1. FLAT
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

//Si solo colocamos flat tendrá 1 nivel de profundidad (1)
console.log(array.flat()); //[ 1, 2, 3, 1, 2, 3, [ 1, 2, 3 ] ]
console.log(array.flat(1));//[ 1, 2, 3, 1, 2, 3, [ 1, 2, 3 ] ]
//para ingresar a otro nivel de profundidad debemos colocar (2)
console.log(array.flat(2));//[ 1, 2, 3, 1, 2, 3, 1, 2, 3]

//10.2. FLATMAP
let array = [2, 3, 4, 5];
let newArray = array.flatMap(value => [value, value*2]);

console.log(newArray);//[2, 4, 3, 6, 4, 8, 5, 10]

//10.3. TRIMSTART() y TRIMEND()
let hello = '    Hello World';
let helloNew = hello.trimStart();

//se imprime incluyendo los espacios iniciales
console.log(hello);//    Hello World

//trimStart() elimina los espacios iniciales
console.log(helloNew);//Hello World

let phrase = 'Hello World!        ';
let newPhrase = phrase.trimEnd();

//Se imprime con todos los espacios al final
console.log(phrase);//Hello World!    

//trimEnd() el quita el espaciado al final    
console.log(newPhrase);//Hello World!

//10.4. OPTIONAL ERROR CATCH
//Antes...
try{
    //code
} catch (error){
    //error code
}

//Ahora ya no es necesario pasar el error
try{
    //code
} catch{
    //error code
}

//10.5. FROM ENTRIES
let entries = [["name", "Oscar"], ["age", 32]];
let obj = Object.fromEntries(entries);
console.log(obj);//{ name: 'Oscar', age: 32 }

//10.6. OBJETO TIPO SIMBOLO
let mySymbl = `My Symbol`;
let symbol = Symbol(mySymbl);
console.log(symbol.description);//My Symbol
console.log(typeof symbol);