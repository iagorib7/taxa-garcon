function calcularValores() {
    var valorJantar = parseFloat(document.getElementById('valorJantar').value);

    var taxaGarçom = valorJantar * 0.15;

    var valorTotal = valorJantar + taxaGarçom;

    document.getElementById('resultadoTaxa').textContent = 'Valor da taxa do garçom (15%): R$ ' + taxaGarçom.toFixed(2);
    document.getElementById('resultadoTotal').textContent = 'Valor total a ser pago: R$ ' + valorTotal.toFixed(2);
}