import { Invoice } from './classes/invoice.js'
import { Payment } from './classes/payments.js'
import {HasFormatter} from './interfaces/HasFormatter'

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('Ganesh', 'web work', 250)
docTwo = new Payment('Sanjay', 'Plummber work', 200)

let docs: HasFormatter[] = []
docs.push(docOne)
docs.push(docTwo)

console.log(docs)

const form = document.querySelector('form')!;
const formOne = document.querySelector('.new-item-form')!;
const formTwo = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(formTwo.children);

// inputs
const type = document.querySelector('#type') as HTMLSelectElement
const typeTwo = document.querySelector('#tofrom') as HTMLInputElement
const typeThree = document.querySelector('#details') as HTMLInputElement
const typeFour = document.querySelector('#amount') as HTMLInputElement

form.addEventListener('submit', (e: Event) => {
    e.preventDefault()

    let doc: HasFormatter;
    if (type.value === 'invoice') {
        doc = new Invoice(typeTwo.value, typeThree.value,  typeFour.valueAsNumber)
    } else {
        doc = new Payment(typeTwo.value, typeThree.value,  typeFour.valueAsNumber)
    }
    console.log( doc)
})
