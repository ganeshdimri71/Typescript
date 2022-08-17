"use strict";
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice('Ganesh', 'work on the mario website', 250);
const invTwo = new Invoice('Sanjay', 'work on the mario website', 300);
console.log(invOne, invTwo);
let invoices = [];
// invoices.push('hello')
// src/app.ts:24:15 - error TS2345: Argument of type 'string' is not assignable to parameter of type 'Invoice'.
// 24 invoices.push('hello')
//                  ~~~~~~~
invoices.push(invOne);
invoices.push(invTwo);
invOne.client = 'Sanjay';
invTwo.amount = 400;
console.log(invOne, invTwo);
console.log(invoices);
const anchor = document.querySelector('a');
console.log(anchor);
// console.log(anchor.href)
// src/app.ts:4:13 - error TS2531: Object is possibly 'null'.
// 4 console.log(anchor.href)
if (anchor) {
    console.log(anchor.href);
}
const anchorOne = document.querySelector('a');
console.log(anchorOne.href);
const form = document.querySelector('form');
const formOne = document.querySelector('.new-item-form');
const formTwo = document.querySelector('.new-item-form');
console.log(formTwo.children);
// inputs
const type = document.querySelector('#type');
const typeTwo = document.querySelector('#tofrom');
const typeThree = document.querySelector('#details');
const typeFour = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, typeTwo.value, typeThree.value, typeFour.valueAsNumber);
});
