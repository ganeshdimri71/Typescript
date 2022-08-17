// Interfaces

interface IsPerson {
    name: string,
    age: number,
    speak(a: string): void;
    spend(a: number): number;
}

// const me: IsPerson = {}
// src/app.ts:10:7 - error TS2739: Type '{}' is missing the following properties from type 'IsPerson': name, age, speak, spend

// 10 const me: IsPerson = {}

const me: IsPerson = {
    name: 'Ganesh',
    age: 30,
    speak(text: string): void {
        console.log(text)
    },
    spend(amount: number): number {
        console.log('I spend ', amount)
        return amount
    },
//     skills: []
//     src/app.ts:25:5 - error TS2322: Type '{ name: string; age: number; speak(text: string): void; spend(amount: number): number; skills: never[]; }' is not assignable to type 'IsPerson'.
//   Object literal may only specify known properties, and 'skills' does 
// not exist in type 'IsPerson'.

// 25     skills: []
}

const greetPerson = (person: IsPerson) => {
    console.log('hello ', person.name )
}

greetPerson(me)

let someone: IsPerson;

console.log(me)
