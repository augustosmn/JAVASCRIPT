function carregar(){
    var atualmente = new Date()
    var year = atualmente.getFullYear()
    var ano = document.getElementById('iano')
    var ano2 = Number(ano.value)
    var idade = year - ano2
    var wrt = document.getElementById('txt')
    var fto = document.getElementById('img')
    var sexo = document.getElementsByName('sexo')
    if(idade < 12 || idade > 100){
        window.alert('Você precisa ter entre 12 e 100 anos para completar essa pesquisa.')
    }else{
        if (sexo[0].checked){
            genero= 'homem'
            if(idade >= 12 && idade <18){
                fto.src = 'imagens/hadolescente.jpg'
            }else if(idade >= 18 && idade <30){
                fto.src = 'imagens/hjovem.jpg'
            }else if(idade >=30 && idade <65){
                fto.src = 'imagens/hadulto.jpg'
            }else{
                fto.src = 'imagens/hidoso.jpg'
            }
        }else if(sexo[1].checked){
            genero = 'mulher'
            if(idade >= 12 && idade <18){
                fto.src = 'imagens/madolescente.jpg'
            }else if(idade >= 18 && idade <30){
                fto.src = 'imagens/mjovem.jpg'
            }else if(idade >=30 && idade <65){
                fto.src = 'imagens/madulto.jpg'
            }else{
                fto.src = 'imagens/midoso.jpg'
            }
        }
    }
    wrt.innerText = (`Detectamos ${genero} com  ${idade} anos.`)
}