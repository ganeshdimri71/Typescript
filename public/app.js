"use strict";
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        // invOne.client = 'Sanjay'
        // src/app.ts:13:16 - error TS2540: Cannot assign to 'client' because it 
        // is a read-only property.
        // 13         invOne.client = 'Sanjay'
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice('Ganesh', 'work on the mario website', 250);
const invTwo = new Invoice('Sanjay', 'work on the mario website', 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
// invoices.forEach(inv => {
//     console.log(inv.client, inv.details, inv.amount, inv.format())
// })
// src/app.ts:39:33 - error TS2341: Property 'details' is private and only accessible within class 'Invoice'.
// 39     console.log(inv.client, inv.details, inv.amount, inv.format()) 
invoices.forEach(inv => {
    // invOne.client = 'Sanjay'
    //     src/app.ts:40:12 - error TS2540: Cannot assign to 'client' because it 
    // is a read-only property.
    // 40     invOne.client = 'Sanjay'
    console.log(inv.client, inv.amount, inv.format());
});
