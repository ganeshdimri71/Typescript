import { Invoice } from "./classes/invoice";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/payments";
import { HasFormatter } from "./interfaces/HasFormatter";

const form = document.querySelector('form')!;
const formOne = document.querySelector('.new-item-form')!;
const formTwo = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(formTwo.children);

// inputs
const type = document.querySelector('#type') as HTMLSelectElement
const typeTwo = document.querySelector('#tofrom') as HTMLInputElement
const typeThree = document.querySelector('#details') as HTMLInputElement
const typeFour = document.querySelector('#amount') as HTMLInputElement

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);
form.addEventListener('submit', (e: Event) => {
    e.preventDefault()

    let values: [string, string, number]
     values = [typeTwo.value, typeThree.value,  typeFour.valueAsNumber]
    // let values = [typeTwo.value, typeThree.value,  typeFour.valueAsNumber]

    let doc: HasFormatter;
    if (type.value === 'invoice') {
        // doc = new Invoice(...values)
        doc = new Invoice(...values)

    } else {
        doc = new Payment(...values)
    }

    list.render(doc, type.value, 'end')
    
})

// tuples

let arr = ['Ganesh', 25, true];
arr[0] = false;
arr[1] = 'Ganesh'
arr = [30, false, 'Ganesh']

let tup: [string, number, boolean] = ['Ganesh', 35, true];
// let tupOne: [string, number, boolean] = [35, 'Ganesh', true];
// src/app.ts:9:46 - error TS2322: Type 'string' is not assignable to type 'number'.
// 9 let tupOne: [string, number, boolean] = [35, 'Ganesh', true];

let tupTwo: [string, number, boolean] = ['Ganesh', 35, true];
tupTwo[0] = 'Sanjay'
tupTwo[1] = 30

let student: [string, number]
student = ['Ganesh', 40]
// student = [44859, ' Fansh']
// src/app.ts:19:18 - error TS2322: Type 'string' is not assignable to type 'number'.
// 19 student = [44859,' Fansh']