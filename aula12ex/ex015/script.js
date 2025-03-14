function carregar(){
    var atualmente = new Date()
    var year = atualmente.getFullYear()
    var ano = document.getElementById('iano')
    var ano2 = Number(ano.value)
    var idade = year - ano2
    var wrt = document.getElementById('txt')
    var sexo = document.getElementById('')
    wrt.innerText = (`${idade}`)
}