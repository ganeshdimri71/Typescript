const anchor = document.querySelector('a');

console.log(anchor)
// console.log(anchor.href)
// src/app.ts:4:13 - error TS2531: Object is possibly 'null'.

// 4 console.log(anchor.href)

if (anchor) {
    console.log(anchor.href)
}

const anchorOne = document.querySelector('a')!;
console.log(anchorOne.href)


const form = document.querySelector('form')!;
const formOne = document.querySelector('.new-item-form')!;
const formTwo = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(formTwo.children);

// inputs
const type = document.querySelector('#type') as HTMLSelectElement
const typeTwo = document.querySelector('#tofrom') as HTMLInputElement
const typeThree = document.querySelector('#details') as HTMLInputElement
const typeFour = document.querySelector('#amount') as HTMLInputElement

form.addEventListener('submit', (e:Event) => {
    e.preventDefault()
    console.log(
        type.value,
        typeTwo.value,
        typeThree.value,
        typeFour.valueAsNumber,
    )
})
