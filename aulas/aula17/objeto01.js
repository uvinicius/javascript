let amigo = {nome : 'José', sexo: 'M', peso: 85.4, engordar(p=0){
    console.log(`${amigo.nome} engordou ${p} Kg`)
    this.peso += p
}
}
amigo.engordar(10)
console.log(`${amigo.nome} está pesando ${amigo.peso}`)
