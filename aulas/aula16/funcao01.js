function parimpar(n){
    if (n % 2 == 0){
        return `${n} é par`
    } else {
        return  `${n} é ímpar`
    }
}
//Sem variável
console.log(parimpar(4))
//Com variável
let res = parimpar(281483015421)
console.log(res)