function calcular(){
var a = document.getElementById('nro');
var nro = Number(a.value);
if(a.value.length == 0){
    alert('Sem dados de número inseridos!');
}else{
    var tab = document.getElementById('itabuada')
    tab.innerHTML = ' '
    for(var i=1; i<=10; i++){
        var item = document.createElement('option')
        item.text = `${nro} x ${i} = ${nro*i}`
        item.value = `tab ${i}`
        tab.appendChild(item)
    }
};
}