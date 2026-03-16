// Objetos são estrtura do tipo chave-valor
// Podemos atribuir de forma dinâmica, assim como em arrays
// Objetos tem índices nomeados
// Podemos usar (for of) ou (for in)

const carros = {
    nome: "Camaro",
    modelo: "xpto cam",
    cores : ["amarelo, preto"],
    cidades: {}
}
carros.modelo = "fuscas"
carros["nome"] = "Chev"
console.log(carros.modelo)
console.log(carros.nome)


// for (carro in carros) { console.log(carro)}