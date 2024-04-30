window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const elementoChute = document.getElementById('chute')

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)
recognition.addEventListener('end', () => recognition.start())

function onSpeak(e){
	const chute = e.results[0][0].transcript;
	mostrarChute(chute)
	verificaChute(chute)
	
}

function mostrarChute(chute){
	elementoChute.innerHTML = `
	<div class="mensagem__mensagem"><h3>Você disse:</h3></div>
	<span class="box">${chute}</span>
	`
}
//numeroFalado.innerHTML = onSpeak()

recognition.onresult = (evento) => {
    const numerosPorExtenso = {
        "zero": 0,
        "um": 1,
        "dois": 2,
        "três": 3,
        "quatro": 4,
        "cinco": 5,
        "seis": 6,
        "sete": 7,
        "oito": 8,
        "nove": 9,
		"sem" : 100
    };

    let chute = evento.results[0][0].transcript.toLowerCase().replaceAll(" ", "");
    console.log("in: ", chute);
    for (let [nome, numero] of Object.entries(numerosPorExtenso)) {
        if (chute.includes(nome)) {
            chute = chute.replace(nome, numero);
            break;
        }
    }
    if (chute.startsWith("menos")) {
        chute = chute.replace(/menos/g, "-", chute);
    }
    console.log("out: ", chute);

    mostrarChute(chute);
    verificaChute(chute);
};
