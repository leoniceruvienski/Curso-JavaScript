var button = document.querySelector('#app button')

button.addEventListener('click', function() {
    alert('Óla leonice ;)')
})



var button = document.querySelector('#app button')

button.addEventListener('mouseover', function() {
    alert('Óla leonice ; )')
})



var button = document.querySelector('#app button')
var input = document.querySelector('#app input#idade')

button.addEventListener('keyup', function() {
    alert('Óla leonice ; )')
}) 





var button = document.querySelector('#app button')
var input = document.querySelector('#app input#idade')

button.addEventListener('click', function() {
    alert('Sua idade é: ' + input.value)
})



var button = document.querySelector('#app button')
var input = document.querySelector('#app input#idade')

function showAge() {
    alert('Sua idade é: ' + input.value)
}

button.addEventListener('click', showAge)
