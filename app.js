let nomeParticipantes = [];

function adicionarAmigo() {
    let nome = document.getElementById('amigo').value;

    if (nome == '') {
        alert('Por favor, insira um nome.');
    } else if (nome != '') {
        nomeParticipantes.push(nome);
        limparCampo();
        listarParticipantes();
    }
}

function limparCampo() {
    nome = document.querySelector('input');
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