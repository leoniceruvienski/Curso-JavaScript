function showcar(){
    //escopo local
    var car = 'BMW'
    console.log(car)
}
showcar()

 // escopo global
 var car = 'BMW'
 function showcar() {
     console.log(car)
 }
 showcar()
 console.log(car)

 function sum (number1, number2) {
     var result= number1 + number2
     return result
 }

 console.log(sum(3,3))


 var result = 'qualquer valor'
 console.log(result)

 