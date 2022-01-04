var array = ['João', 'Oliver', 'Maria']
console.log(array.length)


var array = ['João', 'Oliver', 'Maria']
for(var i = 0; i < array.length; i++) {
    console.log(array)
}



var array = ['João', 'Oliver', 'Maria']
for(var i = 0; i < array.length; i++) {
    console.log(i)
}



var array = ['João', 'Oliver', 'Maria']
for(var i = 0; i < array.length; i++) {
    console.log(array[i])
}


var array = ['João', 'Oliver', 'Maria']
var newValue = array.indexOf( 'João')
console.log(newValue)



var array = ['João', 'Oliver', 'Maria']
array.pop()
console.log(array)



var array = ['João', 'Oliver', 'Maria']
array.push('Leonice')
console.log(array)


var array = ['João', 'Oliver', 'Maria']
array.splice(0, 1)
console.log(array)


var array = ['João', 'Oliver', 'Maria']
var index = array.indexOf('Oliver')
array.splice(index, 1)
console.log(array)

