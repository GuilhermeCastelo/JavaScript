function calcular() {

    var numero = document.querySelector('#nbrNumero');
    var result = document.querySelector('#slcResultado');

    if (numero.value.length != 0) {

        result.innerHTML = "";
        var num = Number(numero.value);

        var cont = 0;
        while (cont <= 10) {
            //cria elemento option
            var item = document.createElement('option'); 
            //adiciona dentro do option um texto
            item.text = cont + " X " + num + " = " + (cont * num); 
            //adiciona dentro do option um value (caso for usar PHP)
            item.value = "opt" + (cont+1);
            //adiciona este option (já com o texto) dento do select
            result.appendChild(item); 
            
            cont++;
        }

    }else{
        alert("Insira um número");
    }

}