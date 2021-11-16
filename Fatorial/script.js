function fatorial() {

    let num = document.querySelector('#nbrNumero').value;
    let spn = document.querySelector('#spnResultado');

    let fat = num;

    for (let cont = num - 1; cont >= 1; cont--) {
        fat = fat * cont;
    }

    spn.innerHTML = num + "! = ";
    spn.innerHTML += fat;

}