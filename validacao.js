function verificaChute(chute){
	
	const numero = + parseInt(chute)

	if(verificaNumero(numero)){
		elementoChute.innerHTML += `<p>Valor invalido: o chute precisa ser um numero</p>`
		return
	}

	if(maiorOuMenor(numero)){
		elementoChute.innerHTML += `<p>Valor invalido. O numero precisa estar entre ${menorNumero} e ${maiorNumero}</p>`
		return
	}

	if(numero === numeroSecreto){
		document.body.innerHTML = `
			<h1>Você acertou!!</h1>
			<h3>O número secreto era ${numeroSecreto}</h3>
			<button id="jogar-novamente" class="btn__jogar-novamente">Jogar Novamente</button>
		`

	} else if(numero > numeroSecreto){
		elementoChute.innerHTML += `
			<div class="mensagem__numero">
				<p>O número secreto é menor<i class="fa-solid fa-down-long"></i>
				</p>
			</div>
		`

	} else{
		elementoChute.innerHTML += `
			<div class="mensagem__numero">
				<p>O número secreto é maior<i class="fa-solid fa-up-long"></i>
				</p>
			</div>
		`
		return contador++
	
	}
	console.log('contador: ' + contador)
}
function verificaNumero(numero){
	return Number.isNaN(numero)
}

function maiorOuMenor(numero){
	return numero > maiorNumero || numero < menorNumero
}

document.body.addEventListener('click', e =>{
	if(e.target.id == 'jogar-novamente'){
		window.location.reload()
	}
})