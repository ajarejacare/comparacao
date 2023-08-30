
function media(){
    var val1 = document.getElementById('valor1').value
    var val2 = document.getElementById('valor2').value
    
    var media =(parseInt(val1) + parseInt(val2))/2


if(media >= 6)
alert('sua media foi '+ media +'aprovado')
else
alert('sua media foi ' + media+ 'reprovado')
    
}

function compara(){
    var val1 = document.getElementById('valor1').value
    var val2 = document.getElementById('valor2').value

    if(val1 ==val2)
    alert('o valores são iguais')
else
    if(val1>val2)
    alert('valor 1 é maior que o valor 2')
    else    
    alert('valor 1 é menor que o valor 2')
}