// var button = document.querySelector('#app button')
// var input = document.querySelector('#app input#idade')

button.addEventListener('click', function  (event) {
    console.log(event)
})



var button = document.querySelector('#app button')
var input = document.querySelector('#app input#idade')

button.addEventListener('click', function  (event) {
   event.preventDefault()
   console.log(event)
})




var button = document.querySelector('#app button')
var input = document.querySelector('#app input#idade')

button.addEventListener('click', function  (event) {
   event.preventDefault()
   console.log('sua idade é:' + input.value)
})


var link = document.querySelector('#app a')
link.addEventListener('click', function (event){
    event.preventDefault()
    console.log('foi')
})