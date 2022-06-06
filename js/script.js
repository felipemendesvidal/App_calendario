var hora_sitema = new Date();
var hora_agora = hora_sitema.getHours();
console.log(`agora são ${hora_agora} horas`)
if(hora_agora < 12){
    console.log('bom dia');
}else if(hora_agora <= 18){
    console.log('boa tarde')
}else{
    console.log('boa noite')
}

