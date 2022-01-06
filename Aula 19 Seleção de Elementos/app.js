console.log(window.document.head)

var input = document.getElementById('idade')
console.log(input)


var input = document.getElementsByClassName('idade')
console.log(input)


var input = document.getElementsByClassName('idade')[0]
console.log(input)


var input = document.getElementsByTagName('input')
console.log(input)


var input = document.querySelector('body div#app')
console.log(input)


var input = document.querySelectorAll('input')
console.log(input)


var input = document.querySelector('input#idade')
console.log(input.parentElement)


var input = document.querySelector('input#idade')
console.log(input.previousElementSibling)


var input = document.querySelector('input#idade')
console.log(input.nextElementSibling)


var list = document.querySelector('div#app ul')
console.log(list.children)