const fs = require('fs')

// console.log(fs)

//const arquivo = fs.readFileSync('./README.md', 'utf-8')
///workspaces/back_end_3ds_jose/2 TRIMESTRE/modulos/mod03-FS/README.md
//2 TRIMESTRE/modulos/mod03-FS/README.md
const arquivoFinal = fs.readFileSync(__dirname +"/README.md",'utf-8')
console.log(arquivoFinal)