let nomeParticipantes = [];

function adicionarAmigo() {
    let nome = document.getElementById('amigo').value;

    if (nome == '') {
        alert('Por favor, insira um nome.');
    } else if (nome != '') {
        nomeParticipantes.push(nome);
        limparCampo();
    }
}

function limparCampo() {
    nome = document.querySelector('input');
    nome.value = '';
}
