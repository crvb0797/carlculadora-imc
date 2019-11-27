
document.getElementById('btn-calcular').addEventListener('click', calcular)

function calcular (){
    var peso = parseFloat(document.getElementById('peso').value)
    var altura = parseFloat(document.getElementById('altura').value)
    var resultado = (peso / (altura*altura))
    var resultado2 = Math.round(resultado * 100)/100  
    document.getElementById('imcTotal').value = resultado2
    
    
}




