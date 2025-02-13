document.addEventListener("DOMContentLoaded", function(){

/*Definimos funciones*/

function findLargestNumber(array){

    let max = array[0];
    for(let i = 0; i < array.length; i++){

        if(max < array[i]){
            max = array[i];
        }
    }
    return max;
}

/*Parte principal del codigo*/

const num_ele_usr = parseInt(prompt("¿Cuantos numeros quieres introducir?"))
let lst_usr = [];

alert("Introduce los " + num_ele_usr + " elementos")
for(let i = 0; i < num_ele_usr; i++){
    const num = parseInt(prompt("Introduce el elemento"));
    lst_usr.push(num);
}

console.log("El maximo de " + lst_usr + " es " + findLargestNumber(lst_usr));
});