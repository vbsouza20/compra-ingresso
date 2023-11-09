function comprar() {
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt (document.getElementById('qtd').value);

    if (tipo.value == 'pista') {
        comprarPista(qtd);
    } else if (tipo.value == 'superior') {
        comprarSuperior(qtd);
    } else {
        comprarInferior(qtd);
    }
}

function comprarPista(qtd) {
    let qdtPista = parseInt (document.getElementById('qtd-pista').textContent);

    if (qtd > qdtPista) {
        alert ('Quantidade Indisponível para Pista');
    } else {
        qdtPista = qdtPista - qtd;
        document.getElementById('qtd-pista').textContent = qdtPista;
        alert ('Compra Realizada com Sucesso!');
    }
}

function comprarSuperior(qtd) {
    let qdtSuperior = parseInt (document.getElementById('qtd-superior').textContent);

    if (qtd > qdtSuperior) {
        alert ('Quantidade Indisponível para Superior');
    } else {
        qdtSuperior = qdtSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qdtSuperior;
        alert ('Compra Realizada com Sucesso!');
    }
}

function comprarInferior(qtd) {
    let qdtInferior = parseInt (document.getElementById('qtd-inferior').textContent);

    if (qtd > qdtInferior) {
        alert ('Quantidade Indisponível para Superior');
    } else {
        qdtInferior = qdtInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qdtInferior;
        alert ('Compra Realizada com Sucesso!');
    }
}
