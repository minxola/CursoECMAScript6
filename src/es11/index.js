/*
11. ECMAScript 11 (2020)
*/
//11.1. Dinamic import
const button = document.querySelector("#btn");

button.addEventListener("click", async function () {
    const module = await import("./file.js");
    module.hello();
});

// 12.1. ES11: BIG INTEGER, para trabajar con números enteros
// mayores a 2^53

//agregar n permite usar numeros grandes
const bigNumber = 9007199254740992n;

console.log(bigNumber);
//9007199254740992n

//Ahora se puede usar BigInt() para lo mismo
const otherBigNumber = BigInt(9007199254740992);

console.log(otherBigNumber);
//9007199254740992n

//12.2. Promise.allSettled()

const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve 1"));

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));

/*
[
  { status: 'rejected', reason: 'reject' },
  { status: 'fulfilled', value: 'resolve' },
  { status: 'fulfilled', value: 'resolve 1' }
]
*/

//12.3. GLOBAL THIS
//Propiedes disponibles en navegador
console.log(window); //Window{...}
console.log(self); //Window{...}
console.log(frames); //Window{...}
console.log(this); //Window{...}

//funciona en todas las plataformas
console.log(globalThis);

//12.4. Operador NULL
const foo = null ?? 'default string';
console.log(foo); //default string

const fizz = 'string' ?? 'default string';
console.log(fizz); //string

//12.5. OPCIONAL CHAINNING
const user = {};
console.log(user.profile.email);
//TypeError: Cannot read properties...

//ES11: no rompe la aplicación con error
const user = {};
console.log(user?.profile?.email);
//undefined

//ejemplo de uso
if(user?.profile?.email){
    console.log('email');
} else {
    console.log('Fail');
}