let num = [2, 4, 8, 16]
num[4] = 32
num.push(64)
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do nosso vetor é ${num[0]}`)
console.log(`O terceiro valor do nosso vetor é ${num[2]}`)
num.push(1)
console.log(num)
num.sort()
console.log(num)
console.log('Esse sort não funciona tão bem quanto deveria funcionar, é uma pena.')
for (let c = 0 ; c < Number(num.length) ; c += 1){
    console.log(`O número ${num[c]} está na posição ${c}`)
}
//Apenas para Variáveis Compostas
for (let pos in num){
    console.log(num[pos])
}
console.log(`O valor 16 está na posição ${num.indexOf(16)}`)
console.log(`O valor 128 está na posição ${num.indexOf(128)} pois ele não existe ainda`)
num.push(128)
console.log(`Agora o valor 128 existe e está na posição ${num.indexOf(128)}`)

let v = 16
let pos = num.indexOf(v)
if (pos == -1){
    console.log(`O valor não foi encontrado`)
} else {
    console.log(`O valor ${v} existe e está na posição ${num.indexOf(v)}`)
}
