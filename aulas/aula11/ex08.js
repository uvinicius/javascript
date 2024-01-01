var vel = Number(70)
var rest= 80 - vel
console.log(`A máxima velocidade permitida é 80Km/h`)
console.log(`A velocidade do seu carro é ${vel}Km/h`)
if (vel >= 80){
    console.log(`Você foi multado.`)
} else{
    console.log(`Acelere mais ${rest}Km/h e será multado`)
}
