let listaDeNumeorSorteado = [];
let numeroLimite = 10;
let numeroSecreto = numeroAleatorio();
let  tentativa = 1; 

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
exibirTextoNaTela('h1', 'Jogo do Numero Secreto');
exibirTextoNaTela('p', `Escolha um numero entre 1 e ${numeroLimite}`);
}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
     
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
        let menssagemTentativas = `Você descobriu o numero Secreto com ${tentativa} ${palavraTentativa}`;
        exibirTextoNaTela('p', menssagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
     } else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O numero Secreto e menor');
        } else{ 
            exibirTextoNaTela('p', 'o numero Secreto e maior');
        }
        tentativa++;
        limparCampo();
     }
}

function numeroAleatorio(){
    let numeroEscolido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumeorSorteado.length;
    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumeorSorteado = [];
    }

    if(listaDeNumeorSorteado.includes(numeroEscolido)){
        return numeroAleatorio();
    } else{
        listaDeNumeorSorteado.push(numeroEscolido);
        console.log(listaDeNumeorSorteado);
        return numeroEscolido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = numeroAleatorio();
    limparCampo();
    tentativa = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
