const menorNumero = 1
const maiorNumero = 100
const numeroSecreto = gerarNumero()

function gerarNumero(){
	return parseInt(Math.random() * maiorNumero + 1)
}
console.log(numeroSecreto)

const elementoMenorNumero = document.getElementById('menor-numero')
const elementoMaiorNumero = document.getElementById('maior-numero')

elementoMenorNumero.innerHTML = menorNumero
elementoMaiorNumero.innerHTML = maiorNumero

