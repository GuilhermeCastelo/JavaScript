function carregar() {
    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes();

    var msg = document.getElementById('msg');
    var img = document.getElementById('img');

    if (hora > 0 && hora < 12) {
        var saudacao = 'um bom dia';
        img.src = 'img/manha.jpg';
        document.body.style.backgroundColor = '#fdc56f';
    } else if (hora >= 12 && hora <= 18) {
        var saudacao = 'uma boa tarde';
        img.src = 'img/tarde.jpg';
        document.body.style.backgroundColor = '#be7264';
    } else {
        var saudacao = 'uma boa noite';
        img.src = 'img/noite.jpg';
        document.body.style.backgroundColor = '#1f3450';
    }

    msg.innerHTML = `Agora são ${hora}:${minutos}.<br><strong>Tenha ${saudacao}</strong>!`;
}