// var VoceComprouOsProdutos = new Promise(function(resolve,
//     reject){

//     })
//     console.log (VoceComprouOsProdutos)



// var VoceComprouOsProdutos = new Promise(function(resolve, reject){
//         resolve()
    
//     })
//     console.log (VoceComprouOsProdutos)


        

        
// var VoceComprouOsProdutos = new Promise(function(resolve, reject) {
//     var products = ['camisa', 'sapato', 'calça']
//     resolve(products)

// })
// console.log (VoceComprouOsProdutos)




var voceComprouOsProdutos  = new  Promise(function (resolve, reject){
    setTimeout(function (){
        var products = ['camisa', 'sapato', 'calça']
        resolve(products)
    }, 3000)
}) 

voceComprouOsProdutos.then(function(){
    console.log('deu certo')
})




var voceComprouOsProdutos  = new  Promise(function (resolve, reject){
    setTimeout(function (){
        var products = ['camisa', 'sapato', 'calça']
        resolve(products)
    }, 3000)
}) 

voceComprouOsProdutos.then(function(products){
    console.log(products)
})






var voceComprouOsProdutos  = new  Promise(function (resolve, reject){
    setTimeout(function (){
        reject('Deu ruim')  
    }, 3000)
}) 

voceComprouOsProdutos.then(function(products){
    console.log(products)
})
.catch(function(error){
    console.log(error)
})