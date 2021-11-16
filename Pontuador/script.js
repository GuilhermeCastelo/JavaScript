let txtNumero = document.querySelector('#txtNumero');

function mais() {
    txtNumero.value = Number(txtNumero.value) + 1;
}

function menos() {
    if (Number(txtNumero.value) != 0) {
        txtNumero.value = Number(txtNumero.value) - 1;
    }
}

function zerar() {
    txtNumero.value = 0;
}