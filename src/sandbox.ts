type StringOrNum = string | number;;
type objWithName = {name: string, id: StringOrNum}

const logDetails = (uid: string | number, item: string) => {
    console.log(`${item} has a uid ${uid}`)
}

const greet = (user: { name: string, uid: string | number }) => {
    console.log(`${user.name} says hello`)
}

const greetAgain = (user: { name: string, uid: string | number }) => {
    console.log(`${user.name} says hello`)
}

const logDetailsOne = (uid: StringOrNum, item: string) => {
    console.log(`${item} has a uid ${uid}`)
}

const greetOne = (user:objWithName) => {
    console.log(`${user.name} says hello`)
}

const greetAgainOne = (user: objWithName) => {
    console.log(`${user.name} says hello`)
}