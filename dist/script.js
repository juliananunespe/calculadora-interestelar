var nome = prompt('Como você se chama?')
var valorEmAnosLuz = 100
var anosLuzEmKm = 9460800000000
var anosLuzEmMetros = 9460730472580800

var valorEmMetros = (valorEmAnosLuz * anosLuzEmMetros).toFixed(2)

var valorEmKm = (valorEmAnosLuz * anosLuzEmKm).toFixed(2)

alert('Olá, '+ nome + '! ' + valorEmAnosLuz + ' anos-luz, equivale a '+ valorEmKm+ ' Km, o que corresponde a ' + valorEmMetros + ' metros.')