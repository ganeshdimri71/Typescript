import { Invoice } from "./classes/invoice";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/payments";
const form = document.querySelector('form');
const formOne = document.querySelector('.new-item-form');
const formTwo = document.querySelector('.new-item-form');
console.log(formTwo.children);
// inputs
const type = document.querySelector('#type');
const typeTwo = document.querySelector('#tofrom');
const typeThree = document.querySelector('#details');
const typeFour = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [typeTwo.value, typeThree.value, typeFour.valueAsNumber];
    // let values = [typeTwo.value, typeThree.value,  typeFour.valueAsNumber]
    let doc;
    if (type.value === 'invoice') {
        // doc = new Invoice(...values)
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
// tuples
let arr = ['Ganesh', 25, true];
arr[0] = false;
arr[1] = 'Ganesh';
arr = [30, false, 'Ganesh'];
let tup = ['Ganesh', 35, true];
// let tupOne: [string, number, boolean] = [35, 'Ganesh', true];
// src/app.ts:9:46 - error TS2322: Type 'string' is not assignable to type 'number'.
// 9 let tupOne: [string, number, boolean] = [35, 'Ganesh', true];
let tupTwo = ['Ganesh', 35, true];
tupTwo[0] = 'Sanjay';
tupTwo[1] = 30;
let student;
student = ['Ganesh', 40];
// student = [44859, ' Fansh']
// src/app.ts:19:18 - error TS2322: Type 'string' is not assignable to type 'number'.
// 19 student = [44859,' Fansh']
