let firtsNumber = prompt("Digite o primeiro número :")
let secondNumber = prompt("Digite o segundo numero :")

firtsNumber = Number (firtsNumber)
secondNumber = Number (secondNumber)

let contro = firtsNumber  + secondNumber
let total = contro / 2

const sum = firtsNumber + secondNumber
const sub = firtsNumber - secondNumber
const mult = firtsNumber * secondNumber
const div = firtsNumber  / secondNumber
const resto = firtsNumber % secondNumber

alert ("A soma  dos Dois números é  : " + sum)
alert ("A Subtração  dos Dois números é : " + sub)
alert ("A Multiplicação  dos Dois números é : " + mult)
alert ("A Divisão dos Dois números é : " + div)
alert ("A Resto da divisão  dos Dois números é : " + resto)

if(firtsNumber == secondNumber){
    alert("Números iguais")
} else{
    alert("Números diferentes")
}
if(( total % 2) !== 0){
    alert("Soma dos dois numerós são impa")
} else {
    alert("Soma dos dois numero é par")
}