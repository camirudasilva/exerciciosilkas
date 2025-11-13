/*
String = conjunto de caracteres
Number = números
Boolean = verdadeiro ou falso, true ou false
Null = vazio
Object = objetos
Array = vetores
*/

let nome = "camiru"
let idade = 17
let salario = 1500
let casado = true
let conjuge = "nycolas"

console.log("Meu nome é ", nome)

const usuario = {
    nome:"Camiru",
    idade:17,
    casado:true,
    conjuge:"nycolas"
}
console.log(usuario.nome) 

let frutas = ["Maça", "Banana", "Uva"]

console.log(frutas[1])

let cadastro = [{
     nome: "Silka",
     idade:17
},
{
    nome:"joelho",
    idade:17

}
]
console.log(cadastro[0])

let nome2 = prompt("digite seu nome ")

document.getElementById('variavel').innerHTML = `Seja bem
 vinda ${nome2}`

 /*
operação = , +, -, /
computadores =
> maior
< menor
>= maior ou igual
<=menor ou igual
== igual que (SOMENTE VALORES)
=== igual que (VALORES E TIPOS)
!= retorna 'true' se o valor E o tipo forem diferentes
!== retorna 'true' se valor OU tipo forem diferentes
*/


let v1= 2 
let v2= "2"
console.log(v1===v2)

let idade1= 16

if(idade1>=18){
    console.log("pessoa maior de idade!")
}
else if (idade>=14){
    console.log("pessoa adolescente!")
}
else {
    console.log("pessoa menos de idade!")
}

let restou1 = 8 % 2
console.log(restou1)

let restou2 = 9 % 2
console.log(restou2)

/*
&& = E, ambas as condições devem ser verdadeiras
|| = OU, apenas uma condição deve ser verdadeira
*/

let nacionalidade = "brasil"
let idade2 = 16

if (idade2 <=17 && nacionalidade === "brasil"){
    console.log ("Não pode dirigir")
}
else if (idade2>=16 && nacionalidade === "estados unidos"){
    console.log ("Pode dirigir")
}
/*
Estrutura de repetição

for = PARA, completa (declaração de variavel, condição e o incremento)

*/

for (let i=0; i<=10; i++){
    console.log (i)
}
let frutasDiversas = ["Maça, banana, uva, morango"]
for (let i=0; i< frutasDiversas.length; i++){
    console.log (frutasDiversas[i])
}

let x = 0

while (x<=10){
    console.log(x)
    x++
}