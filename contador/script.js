function contar() {
    let inicio = Number(document.querySelector('#nbrInicio').value);
    let fim = Number(document.querySelector('#nbrFim').value);
    let passo = Number(document.querySelector('#nbrPasso').value);
    let result = document.querySelector('#result');

    result.innerHTML = "";
    result.style.color = "black";

    if (inicio == 0 || fim == 0) {
        result.style.color = "red";
        result.innerHTML = "Preenhcha os campos acima com números acima de 0.";

    } else {

        if (passo <= 0) {
            alert("Você inseriu um passo inválido. Será considerado o passo 1.");
            passo = 1;
        }

        if (inicio < fim) {
            //Contagem crescente
            for (let cont = inicio; cont <= fim; cont += passo) {
                result.innerHTML += cont + " \u{1F449} ";
            }

        } else {
            //Contagem decrescente
            for (let cont = inicio; cont >= fim; cont -= passo) {
                result.innerHTML += cont + " \u{1F449} ";
            }
        }

        result.innerHTML += " \u{1F3C1} ";
    }

}