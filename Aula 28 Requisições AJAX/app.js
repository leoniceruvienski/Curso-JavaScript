// var button = document.querySelector('#app button')

button.addEventListener('click', function () {
    var xhr = new XMLHttpRequest()

    xhr.open('GET', 'https://api.github.com/users')
    xhr.send()

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.responseText)
        }
    }
     
}) 



var button = document.querySelector('#app button')

button.addEventListener('click', function () {
    var xhr = new XMLHttpRequest()

    xhr.open('GET', 'https://api.github.com/users')
    xhr.send()

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(JSON.parse(xhr.responseText))
        }
    }
     
}) 



var button = document.querySelector('#app button')

button.addEventListener('click', function () {
    var xhr = new XMLHttpRequest()

    xhr.open('GET', 'https://api.github.com/users')
    xhr.send()

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
           var data = JSON.parse(xhr.responseText)
           console.log(data[0].login)
        }
    }
     
})