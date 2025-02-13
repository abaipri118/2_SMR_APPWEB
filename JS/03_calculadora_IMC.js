let peso = parseFloat(prompt("Introduce tu peso en kilogramos"))
let altura = parseFloat(prompt("Introduce tu altura en metros"))

let altura_2 = altura ** 2

let IMC = peso /= altura_2

if (IMC < 18.5){
    alert("IMC: " + IMC.toFixed(2))
    alert("Clasificacion: Bajo de peso")
}else if (IMC >18.5 && IMC<24.9){
    alert("IMC: " + IMC.toFixed(2))
    alert("Clasificaion: Peso Normal")
}else if(IMC >25 && IMC<29.9){
    alert("IMC: " + IMC.toFixed(2))
    alert("Clasificacion: Sobrepeso")
}else{
    alert("IMC: " + IMC.toFixed(2))
    alert("Clasificacion: Obesidad")  
}
