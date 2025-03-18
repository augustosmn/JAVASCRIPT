function calcular(){
    var small = document.getElementById('small')
    var big = document.getElementById('big')
    var pass = document.getElementById('pass')
    var resp = document.getElementById('resp')
    if(small.value.length == 0 || big.value.length == 0 || pass.value.length == 0){
        alert('ERRO, faltam dados!')
    }else{
        resp.innerHTML = "Contando: <br>"
        var small2 = Number(small.value)
        var big2 = Number(big.value)
        var pass2 = Number(pass.value)
        if(pass2 == 0){
            window.alert('Passo INVÁLIDO, consierando passo 1: ')
            pass2 = 1
        }
        if(small2<big2){
            for(var c = small2; c <= big2; c += pass2){
                resp.innerHTML += `${c} \u{1F449}`
            }
        }else{
            for(var c = small2; c >=big2; c-=pass2){
                resp.innerHTML += `${c} \u{1F449}`
            }
    }
    }
    resp.innerHTML += "\u{1F3C1}"
}