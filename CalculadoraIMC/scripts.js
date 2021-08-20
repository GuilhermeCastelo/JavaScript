function calcular() {
    var peso = Number(document.querySelector("#txtPeso").value.replace(",", "."));
    var altura = Number(document.querySelector("#txtAltura").value.replace(",", "."));
    var resultado = document.querySelector("#spnResultado");
    var categoria = document.querySelector("#spnCategoria");

    var imc = (peso / (altura * altura)).toFixed(2);

    if (peso != "" || altura != "") {
        if (imc < 14.5) {
            categoria.innerHTML = "Categoria: <b>Desnutrição</b>.";

        } else if (imc < 20) {
            categoria.innerHTML = "Categoria: <b>Abaixo do peso</b>.";

        } else if (imc < 24.9) {
            categoria.innerHTML = "Categoria: <b>Peso normal</b>.";

        } else if (imc < 29.9) {
            categoria.innerHTML = "Categoria: <b>Acima do peso</b>.";

        } else if (imc < 39.9) {
            categoria.innerHTML = "Categoria: <b>Obesidade</b>.";

        } else {
            categoria.innerHTML = "Categoria: <b>Obesidade mórbida</b>.";
        }
        resultado.innerHTML = "IMC: " + imc;
    }else{
        resultado.innerHTML = "Informe o <b>peso</b> e a <b>altura</b>.";
    }




}

function formatar(valor) {
    var v = valor.value.replace(/\D/g,'');
	v = (v/100).toFixed(2) + '';
	v = v.replace(".", ".");
	v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
	v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");
	valor.value = v;
}
