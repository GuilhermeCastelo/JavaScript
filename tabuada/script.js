function calcular() {

    var numero = document.querySelector('#nbrNumero').value;
    var result = document.querySelector('#txtResultado');

    if (numero != 0) {
        result.innerHTML = "";

        var cont = 0;
        while (cont <= 10) {
            result.innerHTML += cont + " X " + numero + " = " + (cont * numero);
            cont++;
            result.innerHTML += "\n";
        }
    }else{
        alert("Insira um número");
    }

}