document.addEventListener("DOMContentLoaded", function(){


/*Definicion de funciones*/
function PrecioDescuento(pre_ori, dsc){

    return pre_ori*(1-dsc/100);   
}


/*Parte principal del codigo*/
const pre_usr = parseFloat(prompt("Introduce el precio original"))
const dsc_usr = parseFloat(prompt("Introduce el descuento a aplicar"))

alert(" El precio final del producto después de aplicar un descuento del " + dsc_usr + "% es: " + PrecioDescuento(pre_usr,dsc_usr) + " euros.")

});