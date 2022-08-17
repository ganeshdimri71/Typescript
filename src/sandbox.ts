

//example 1
let greet: (a: string, b: string) => void

// greet = (name: string, greeting: string) => {
//     console.log(`${name} says ${greeting}`)
// }

// greet = (name: string, greeting: number) => {
//     console.log(`${name} says ${greeting}`)
// }
// src/sandbox.ts:10:1 - error TS2322: Type '(name: string, greeting: number) => void' is not assignable to type '(a: string, b: string) => void'.
//   Types of parameters 'greeting' and 'b' are incompatible.
//     Type 'string' is not assignable to type 'number'.

// 10 greet = (name: string, greeting: number) => {


greet = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`)
}

//example 1
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
    if (action === 'add') {
        return numOne + numTwo;
    } else {
        return numOne - numTwo
    }
}

//example 3
let logDetails: (obj: {name: string, age: number }) => void;

type person = { name: string, age: number };
logDetails = (ninja: person) => {
    console.log(`${ninja.name} is ${ninja.age} years old`)
}