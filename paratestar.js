const letrasMaiusculas = /[A-Z]/;
const letrasMinusculas = /[a-z]/; 
const numeros = /[0-9]/;
const caracteresEspeciais = /[!|@|#|$|%|^|&|*|(|)|-|_]/;
var senha =  ("Amanh55@");

function testando(teste){
    if(!teste.test(senha)){
       return 1
    }else{
        return 0
    }
}

let verificandoMai = testando(letrasMaiusculas)
console.log(verificandoMai)
let verificandoMin=testando (letrasMinusculas)
console.log(verificandoMin)
let verificandoCar = testando(caracteresEspeciais) 
console.log (verificandoCar)
let verificandoNun = testando(numeros)
console.log(verificandoNun)


if (verificandoMai ==1 ){
    alert ("Senha não possue letra Maiuscula")
}
if  (verificandoMin ==1){
    alert ("Senha não possue letra Minuscula")
}
if (verificandoCar== 1){
    alert ("Senha não possue letra Caractere")
}
if (verificandoNun == 1){
    alert ("Senha não possue letra Numero")
}
if (verificandoCar== 0 && verificandoMai==0 && verificandoMin==0 && verificandoNun==0){
    alert ("senha cadastrada com sucesso!")
}