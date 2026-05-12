// Crie um arrays que contenha 3 frutas
// Adcione 4 frutas com o método .push(<NomeFruta>)
// Faça um loop for que remova todas as frutas
// Verifique, se todas as frutas foram removidas
// Imprima "Nenhuma fruta encontrada"
const frutas = ['jacá', 'Mangá', 'Maracujá']
//console.log(frutas)
frutas.push('pêssego')
frutas.push('Morango')
frutas.push('Uva')
frutas.push('Abacaxi')
//console.log(frutas)
frutas.pop(frutas)
//console.log(frutas)
//console.log(frutas)
while (frutas.length > 0) {
    frutas.pop()
    if(frutas.length == 0){
        console.log("Não há frutas para vender!!!")
    }
}
console.log(frutas)
console.log(frutas.length)