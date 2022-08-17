import { Invoice } from './classes/invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/payments.js';
let docOne;
let docTwo;
docOne = new Invoice('Ganesh', 'web work', 250);
docTwo = new Payment('Sanjay', 'Plummber work', 200);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);
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
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(typeTwo.value, typeThree.value, typeFour.valueAsNumber);
    }
    else {
        doc = new Payment(typeTwo.value, typeThree.value, typeFour.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
