let greet = () => {
    console.log('Hello world');
}

// greet = 'hello'
// src/sandbox.ts:5:1 - error TS2322: Type 'string' is not assignable to type '() => void'.

// 5 greet = 'hello'

let greetOne: Function;

greet = () => {
    console.log('Hllo Again')
}

const add = (a:number, b:number) => {
    console.log(a+b)
}

add(5,10)

const addOne = (a:number, b:number) => {
    console.log(a+b)
}

// addOne(5,'10')
// src/sandbox.ts:26:10 - error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.

// 26 addOne(5,'10')


const addTwo = (a: number, b: number, c?: number | string) => {
    console.log(a + b)
    console.log(c)
}

addTwo(5,10)

const addThree = (a: number, b: number, c: number | string = 10):void => {
    console.log(a + b)
    console.log(c)
}

addThree(5,10)
addThree(5,10,20)
addThree(5, 10, '20')

const minus = (a: number, b: number) => {
    return a + b;
}

let result = minus(10, 7)
// result = 'soething else'

// src/sandbox.ts:53:1 - error TS2322: Type 'string' is not assignable
// to type 'number'.

// 53 result = 'soething else'


const minusOne = (a: number, b: number):number => {
    return a + b;
}

let resultOne = minusOne(10, 7)