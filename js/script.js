function carregar (){
    var div_msg = document.getElementById('campo-msg');
    var img = document.getElementById('imagem-relogio');
    //pegar data atual
    var data_atual = new Date();
    var hora_atual = data_atual.getHours();
    var minutos_atual = data_atual.getMinutes();
    var fundo = document.getElementById('fundo');
    div_msg.innerHTML = `Agora são ${hora_atual} : ${minutos_atual} horas`;

    //para trocar as horas
    if(hora_atual >= 0 && hora_atual < 12){
        //bom dia
        img.src = 'img/manha.jpg';
        //para mudar a cor
        //fundo.style.background = "red";

    }else if(hora_atual >= 12 && hora_atual < 18){
        //boa tarde
        img.src = 'img/tarde.jpg';;

    }else{
        //boa noite
        img.src = 'img/nublado.jpg';
    }
    console.log(fundo)
}


