// explicit types
var character;
var age;
var isLoggedIn;
// age = 'Ganesh'
// sandbox.ts:6:1 - error TS2322: Type 'string' is not assignable to type 'number'.
// 6 age = 'Ganesh'
age = 30;
// isLoggedIn = 25;
// sandbox.ts:13:1 - error TS2322: Type 'number' is not assignable to type 'boolean'.
// 13 isLoggedIn = 25;
isLoggedIn = true;
//arrays
var ninjas;
// ninjas = [10, 23]
// sandbox.ts:23:14 - error TS2322: Type 'number' is not assignable to
// type 'string'.
// 23 ninjas = [10,23]
//                 ~~
// ninjas = ['Ganesh','Sanjay']
// ninjas.push('shaun')
// sandbox.js:21 Uncaught TypeError: Cannot read properties of undefined (reading 'push')
//     at sandbox.js:21:8
var ninjasOne = [];
ninjasOne.push('shaun');
// union types
var mixed = [];
mixed.push('hello');
mixed.push(20);
// mixed.push(false)
// sandbox.ts:44:12 - error TS2345: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
// 44 mixed.push(false)
var mixedOne = [];
mixedOne.push('hello');
mixedOne.push(20);
mixedOne.push(false);
console.log(mixedOne);
var uid;
uid = '123';
uid = 123;
// uid = false
// sandbox.ts:59:1 - error TS2322: Type 'boolean' is not assignable to
// type 'string | number'.
// 59 uid = false
//objects
var ninjaTwo;
ninjaTwo = { name: 'Ganesh', age: 30 };
// ninjaTwo = 'hello'
// sandbox.ts:68:1 - error TS2322: Type 'string' is not assignable to type 'object'.
// 68 ninjaTwo = 'hello'
var ninjaThree;
// ninjaThree = {}
// sandbox.ts:79:1 - error TS2739: Type '{}' is missing the following properties from type '{ name: string; age: number; beltColor: string; }': name, age, beltColor
// 79 ninjaThree = {}
ninjaThree = { name: 'mario', age: 20, beltColor: 'black' };
// ninjaThree = {name:'mario',age:20,beltColor:'black',game:'hello'}
// sandbox.ts:85:53 - error TS2322: Type '{ name: string; age: number; 
// beltColor: string; game: string; }' is not assignable to type '{ name: string; age: number; beltColor: string; }'.
//   Object literal may only specify known properties, and 'game' does 
// not exist in type '{ name: string; age: number; beltColor: string; }'.
// 85 ninjaThree = {name:'mario',age:20,beltColor:'black',game:'hello'}
