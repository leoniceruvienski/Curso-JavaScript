var isactive = true
var message = ''

//condição

console.log(message)

var isactive = false
var message = ''

if (isactive){
    message = 'Está Ativo'
} else{
    message = 'Não está ativo'
}

console.log(message)

var trafficLight = 'amarelo'
var message = ''

if (trafficLight == 'verde') { // se
    message = 'Pode passar'
}else if (trafficLight == 'vermelho') { // se não, se
    message = 'Pare'
}else if (trafficLight == 'amarelo') { // se não, se
    message = 'Atenção'
}else {
    message = 'Valor Inválido'
}   
 console.log(message)


var trafficLight = 'verde'
var message = ''

switch (trafficLight) {
    case'verde' :
     message = 'Pode passar'
     break
    case'vermelho' :
     message = 'Pare'
     break
    case'amarelo' :
     message = 'Atenção'
     break 
    default:
     message = 'valor inválido'
     
}

console.log(message)


























