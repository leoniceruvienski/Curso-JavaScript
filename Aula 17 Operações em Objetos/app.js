var person = {
    name: 'Leonice Ruvienski',
    height: 1.64,
}
person.age = 30
console.log(person)



var person = {
    name: 'Leonice Ruvienski',
    height: 1.64,
}
Object.freeze(person)
person.name = 'Ronaldo'
console.log(person)



var person = {
    name: 'Leonice Ruvienski',
    height: 1.64,
}
var any = {
    age:30
}

person = Object.assign(person, any)
console.log(person)