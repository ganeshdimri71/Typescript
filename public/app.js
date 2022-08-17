"use strict";
// Generics
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'Ganesh', age: 40 });
console.log(docOne);
// console.log(docOne.name)
// src/app.ts:11:20 - error TS2339: Property 'name' does not exist on type '{ uid: number; }'.
// 11 console.log(docOne.name)
const addUIDOne = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docTwo = addUIDOne({ name: 'Ganesh', age: 40 });
console.log(docTwo.name);
const addUIDTwo = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docThree = addUIDTwo({ name: 'Ganesh', age: 40 });
console.log(docThree.name);
const docFour = {
    uid: 1,
    resourceName: 'person',
    data: 'Ganesh'
};
const docFive = {
    uid: 1,
    resourceName: 'person',
    data: { name: 'Ganesh' }
};
const docSix = {
    uid: 1,
    resourceName: 'shoppingList',
    data: ['test', 'bread', 'milk']
};
