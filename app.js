// Buena suerte ! Espero que se te encianda la "bombilla"!

//1)Seleccionamos bombilla
const bulbClick = document.querySelector("#bulb");
//2)Creamos evento
bulbClick.addEventListener('click', getBulbOnOff);


//3)Funcion getBulbOnOff
function getBulbOnOff (){
    console.log(document.querySelector(".bulb-off"));
    if (!!document.querySelector(".bulb-off")){ //me es util el !! para convertir eso en boleano
        bulbClick.classList.remove("bulb-off");
        bulbClick.classList.add("bulb-on");
    }
    else{
        bulbClick.classList.remove("bulb-on");
        bulbClick.classList.add("bulb-off");
    }

}
