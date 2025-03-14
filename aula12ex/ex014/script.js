function carregar(){
        var agora = new Date()
        var hora = agora.getHours()
        var wrt = document.getElementById('txt')
        wrt.innerText = (`Agora são ${hora} horas.`)
        var img = document.getElementById('img')
        if(hora>=7 && hora<13){
             img.src = 'manha.png'
             document.body.style.background = '#FEE474'
        }else if(hora>=13 && hora<19){
             img.src = 'tarde.png'
             document.body.style.background = '#C0D6DD'
        }else{
             img.src = 'noite.png'
             document.body.style.background = '#3372AC'
        }
}