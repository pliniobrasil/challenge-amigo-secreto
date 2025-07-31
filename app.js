let nomeParticipantes = [];

function verificarParticipante(nome) {
    // Compara todos os nomes em minúsculo para evitar duplicidade por maiúsculas/minúsculas
    return nomeParticipantes.some(participante => participante.toLowerCase() === nome.toLowerCase());
}

function adicionarAmigo() {
    let nome = document.getElementById('amigo').value;

    if (nome == '') {
        alert('Por favor, insira um nome.');
    } else if (verificarParticipante(nome)) {
        alert('Este participante já foi adicionado.');
        limparCampo();
    } else {
        nomeParticipantes.push(nome);
        limparCampo();
        listarParticipantes();
    }
}

function limparCampo() {
    let nome = document.querySelector('input');
    nome.value = '';
}

function listarParticipantes() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpa a lista antes de adicionar os participantes
    nomeParticipantes.forEach(function(participante) {
        let item = document.createElement('li');
        item.textContent = participante;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (nomeParticipantes.length < 2) {
        alert('É necessário pelo menos dois participantes para realizar o sorteio.');
        return;
    }

    let amigoSorteado = nomeParticipantes[Math.floor(Math.random() * nomeParticipantes.length)];
    let resultado = document.getElementById('resultado');
    resultado.textContent = `O amigo secreto sorteado é: ${amigoSorteado}`;
    nomeParticipantes = nomeParticipantes.filter(participante => participante !== amigoSorteado);
    listarParticipantes();
}