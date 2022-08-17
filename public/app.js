"use strict";
// Interfaces
// const me: IsPerson = {}
// src/app.ts:10:7 - error TS2739: Type '{}' is missing the following properties from type 'IsPerson': name, age, speak, spend
// 10 const me: IsPerson = {}
const me = {
    name: 'Ganesh',
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spend ', amount);
        return amount;
    },
    //     skills: []
    //     src/app.ts:25:5 - error TS2322: Type '{ name: string; age: number; speak(text: string): void; spend(amount: number): number; skills: never[]; }' is not assignable to type 'IsPerson'.
    //   Object literal may only specify known properties, and 'skills' does 
    // not exist in type 'IsPerson'.
    // 25     skills: []
};
const greetPerson = (person) => {
    console.log('hello ', person.name);
};
greetPerson(me);
let someone;
console.log(me);
