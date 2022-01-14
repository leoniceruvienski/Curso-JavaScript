var button = document.querySelector('#app button')

button.addEventListener('click', function() {
    axios
     .get('https://api.github.com/users')
     .then(function () {
        console.log('Deu certo')
    })
    .catch(function () {
        console.log('Deu ruim')
    })
})




var button = document.querySelector('#app button')

button.addEventListener('click', function() {
    axios
     .get('https://api.github.com/users')
     .then(function (response) {
        console.log(response)
    })
    .catch(function (error) {
        console.log(error)
    })
})



var button = document.querySelector('#app button')

button.addEventListener('click', function() {
    axios
     .get('https://api.github.com/users')
     .then(function (response) {
        console.log(response.data)
    })
    .catch(function (error) {
        console.log(error)
    })
})





var button = document.querySelector('#app button')

button.addEventListener('click', function() {
    axios
     .get('https://api.github.com/users')
     .then(function (response) {
        console.log(response.data[2].login)
    })
    .catch(function (error) {
        console.log(error)
    })
    .finally(function (){
        console.log('finalizou')
    })
})