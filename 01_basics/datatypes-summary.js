//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Onish",
    age: 2,
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

///////////stack(primitive) & heap (non primitive)

let userOne = "Onish"
let userTwo = userOne
userTwo = "Nidhi"
// console.log(userOne)
// console.log(userTwo)

let firstUser = {
    email: "nidhi@gmail.com",
    name : "Nidhi",
    age: 30,
    id: 12,
    
}
let secondUser = firstUser
secondUser.email = "nidhiverma@gmail.com"
console.log(firstUser.email);
console.log(secondUser.email);
console.log(firstUser);
console.log(secondUser);
