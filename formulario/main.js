function validarFormulario() {
    // Obtém os valores dos campos A e B
    var campoA = document.getElementById('campoA').value;
    var campoB = document.getElementById('campoB').value;

    // Converte os valores para números
    campoA = parseInt(campoA);
    campoB = parseInt(campoB);

    // Verifica se o número B é maior que o número A
    if (campoB > campoA) {
        document.getElementById('mensagem').innerHTML = 'Formulário válido. B é maior que A.';
    } else {
        document.getElementById('mensagem').innerHTML = 'Formulário inválido. B deve ser maior que A.';
    }
}