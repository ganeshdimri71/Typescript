import { Invoice } from './classes/invoice.js';
const invOne = new Invoice('Ganesh', 'work on the mario website', 250);
const invTwo = new Invoice('Sanjay', 'work on the mario website', 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
