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
// enum
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const docFour = {
    uid: 1,
    resourceName: ResourceType.BOOK,
    data: { name: 'Ganesh' }
};
const docFive = {
    uid: 1,
    resourceName: ResourceType.PERSON,
    data: ['test', 'bread', 'milk']
};
console.log(docFour, docFive);
