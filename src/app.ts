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


// with interfaces
interface Resource<T>{
    uid: number;
    resourceName: string;
    data: T; 
}

const docFour: Resource<string> = {
    uid: 1,
    resourceName: 'person',
    data:  'Ganesh'
    
}

interface ResourceOne<T>{
    uid: number;
    resourceName: string;
    data: T; 
}

const docFive: ResourceOne<object> = {
    uid: 1,
    resourceName: 'person',
    data: {name: 'Ganesh'}
    
}

const docSix: Resource<string[]>  = {
      uid: 1,
    resourceName: 'shoppingList',
    data: ['test', 'bread', 'milk']
}