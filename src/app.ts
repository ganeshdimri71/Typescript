// Generics

const addUID = (obj: object) => {
    let uid = Math.floor(Math.random() * 100);
    return { ...obj, uid };
}

let docOne = addUID({name: 'Ganesh', age: 40})

console.log(docOne)
// console.log(docOne.name)
// src/app.ts:11:20 - error TS2339: Property 'name' does not exist on type '{ uid: number; }'.
// 11 console.log(docOne.name)

const addUIDOne = <T>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return { ...obj, uid };
}

let docTwo = addUIDOne({name: 'Ganesh', age: 40})

console.log(docTwo.name)

const addUIDTwo = <T extends {name: string}>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return { ...obj, uid };
}

let docThree = addUIDTwo({name: 'Ganesh', age: 40})

console.log(docThree.name)


// enum

enum ResourceType {BOOK, AUTHOR, FILM, DIRECTOR, PERSON}
interface Resource<T>{
    uid: number;
    resourceName: ResourceType;
    data: T; 
}

const docFour: Resource<object> = {
    uid: 1,
    resourceName: ResourceType.BOOK,
    data: { name:'Ganesh'}
}

const docFive: Resource<string[]>  = {
    uid: 1,
    resourceName: ResourceType.PERSON,
    data: ['test', 'bread', 'milk']
}

console.log(docFour, docFive)