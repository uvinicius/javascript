var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12 && hora >= 5){
    console.log('Bom dia!')
} else if (hora < 5){
    console.log('É madrugada, vá dormir.')
} else if (hora < 19) {
    console.log('Boa tarde!')
} else if (hora <= 23) {
    console.log('Boa noite!')
} else {
    console.log('Isto é um valor que não faz parte das 24 horas de um dia.')
}