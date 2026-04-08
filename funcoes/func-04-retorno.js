function sobraDoSalario(meuSalario){
    const contaDeLuz = 150.0
    const aluguel = 1400.0
    const resto = meuSalario - (contaDeLuz+aluguel)
    return `O que restou no fim do mês ${resto}`
}
const minhasSobras = sobraDoSalario(1700.0)
console.log(sobraDoSalario(5000.0))