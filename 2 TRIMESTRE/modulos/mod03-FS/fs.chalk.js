// importar PATH E FS
// Patch possui (join para juntar caminhos e resolve
// para deduzir subdiretórios e S.O.)
const{ error } = require('console')
const fs = require('fs')
const path = require('path')
const chalk = require('chalk').default

// Salvar o caminho em uma variável
//const caminho = path.join(__dirname, 'README.md')//Markdown, text,
try {
const caminho = path.resolve(__dirname, 'README.md')// Abrir, ler, deletar, editar
const arquivo = fs.readFileSync(caminho, 'utf-8')
console.log(chalk.green('Arquivo carregado com sucesso'))
console.log(arquivo)
}catch(error){
    console.log(chalk.yellow('falha ao carregar o arquivo. Tentenovamente mais tarde'))
    console.log(chalk.red('Erro interno de leitura de arquivo:\n', error.message))
}