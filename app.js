let listaDeNumerosSorteados = []; //lista vazia
let numeroLimite = 100; //quantidade máxima de elementos a ser sorteados
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

// let titulo = document.querySelector('h1'); // variável = caminho do documento HTML (qual item pegar)
// titulo.innerHTML = 'Jogo do número secreto'; // variável . elemento que será criado ou modificado 'nome a ser utilizado'
// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML  = 'Escolha um número entre 1 e 10';
// Melhorando o código
function exibirNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2}); //1° parametro é referente ao texto que ele irá ler, 2° formato desejado, 3° rate, velocidade da fala
}

function exibirMensagemInicial() {
    exibirNaTela ('h1', 'Jogo do número secreto');
    exibirNaTela ('p', 'Escolha um número entre 1 e 10');
}
exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirNaTela ('h1', 'Acertou Miserávi!!!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirNaTela ('p', mensagemTentativas);
        document.getElementById ('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirNaTela ('p', 'O número secreto é menor');
        } else {
            exibirNaTela ('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt (Math.random() * numeroLimite + 1 );
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();//caso o número gerado já estiver, irá gerar um novo número 
    } else { //se não estiver na lista, irá retornar o número gerado
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo () {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}



