// importar PATH E FS
// Patch possui (join para juntar caminhos e resolve
// para deduzir subdiretórios e S.O.)
const fs = require('fs')
const path = require('path')

// Salvar o caminho em uma variável
//const caminho = path.join(__dirname, 'README.md')//Markdown, text,
try {
const caminho = path.resolve(__dirname, 'README.md')// Abrir, ler, deletar, editar
const arquivo = fs.readFileSync(caminho, 'utf-8')
console.log(arquivo)
}catch(erro){
    console.log('-------------------------')
    console.warn("Atenção!"/erro.path)
    throw new Error("Algo deu errado na sua operação!");

    console.log('-------------------------')
}