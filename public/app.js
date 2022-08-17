"use strict";
class Invoice {
    constructor(
    //            client: string,
    //            details: string,
    //         amount: number,
    // src/app.ts:28:21 - error TS2339: Property 'client' does not exist on type 'Invoice'.
    // 28     console.log(inv.client, inv.amount, inv.format())
    //                        ~~~~~~
    // src/app.ts:28:33 - error TS2339: Property 'amount' does not exist on type 'Invoice'.
    // 28     console.log(inv.client, inv.amount, inv.format())
    client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice('Ganesh', 'work on the mario website', 250);
const invTwo = new Invoice('Sanjay', 'work on the mario website', 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
