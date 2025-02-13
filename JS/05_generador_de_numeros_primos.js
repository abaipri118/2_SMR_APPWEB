document.addEventListener("DOMContentLoaded", function(){

    /*Funciones*/
    function esPrimo(a){
        
        for(let i = 2; i < a; i++){
            if(a % i == 0){
                return false;
            }
        }
        
        return true;
    }

    /*Parte principal del codigo*/
    const num1 = parseInt(prompt("Introduce un numero entero"));
    const num2 = parseInt(prompt("Introduce otro numero entero"));

    let min, max;
    let lst = [];

    if(num1 >= num2){
        max = num1
        min = num2
    }else{
        max = num2
        min = num1
    }

    for(let i = min; i <= max; i++){
        if(esPrimo(i)){
            lst.push(i);
        }
    }


}); 