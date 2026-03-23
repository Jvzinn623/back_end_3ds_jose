// Crie um objeto do tema que escolher
// Crie pelo menos 5 propriedades
// Faça uma impressão para humanos!
// ex. console.log("Nome do jogador: " + jogador.nome)

const vilao = {
    nome: "Coringa",
    modelo: "DC",
    poderes: ["Sem poderes"],
}
vilao.modelo = "Charada"
vilao["nome"] = "Pinguim"
console.log(vilao.poderes.modelo)
console.log(vilao.nome)

//for(var poderes in vilao){console.log(poderes)}