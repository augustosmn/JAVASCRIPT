var agora = new Date()
var hora = agora.getHours()
if (hora>=13 && hora<19){
    console.log('Boa tarde!')
}else if(hora<=19 && hora>7){
    console.log('Bom dia!')
}else{
    console.log('Boa noite!')
}