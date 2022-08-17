//arrays
var names = ['luigi', 'mario', 'yoshi'];
names.push('toad');
// names.push(3)
// Argument of type 'number' is not assignable to parameter of type 'string'.
// 5 names.push(3)
var numbers = [10, 20, 30, 40];
numbers.push(25);
// numbers.push('shaun')
// sandbox.ts:13:14 - error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
// numbers[1] = 'shaun'
// sandbox.ts:17:1 - error TS2322: Type 'string' is not assignable to type 'number'.
// 17 numbers[1] = 'shaun'
var mixed = ['ken', 4, 'chun-li', 8, 9, true];
mixed.push('ryu');
mixed.push(10);
mixed[0] = 3;
//Objects
var ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};
ninja.age = 40;
ninja.name = 'ryu';
// ninja.age = '30'
// sandbox.ts:38:1 - error TS2322: Type 'string' is not assignable to type 'number'.
// 38 ninja.age = '30'
// ninja.skills = ['fighting']
// sandbox.ts:43:7 - error TS2339: Property 'skills' does not exist on
// type '{ name: string; belt: string; age: number; }'.
// 43 ninja.skills = ['fighting']
// ninja = {
//     name: 'yoshi',
//     belt: 'orange',
// }
// sandbox.ts:49:1 - error TS2741: Property 'age' is missing in type '{ name: string; belt: string; }' but required in type '{ name: string; belt: string; age: number; }'.
// 49 ninja = {
//    ~~~~~
//   sandbox.ts:33:5
//     33     age:30
//            ~~~~~~
//     'age' is declared here.
ninja = {
    name: 'yoshi',
    belt: 'orange',
    age: 40
};
// ninja = {
//     name: 'yoshi',
//     belt: 'orange',
//     age: 40,
//     skills:[]
// }
// sandbox.ts:73:5 - error TS2322: Type '{ name: string; belt: string; 
// age: number; skills: undefined[]; }' is not assignable to type '{ name: string; belt: string; age: number; }'.
//   Object literal may only specify known properties, and 'skills' does not exist in type '{ name: string; belt: string; age: number; }'. 
// 73     skills:[]
//        ~~~~~~~~~
