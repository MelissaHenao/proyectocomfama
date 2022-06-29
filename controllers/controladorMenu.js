//1.TRAIGA LA ETIQUETA QUE QUIERE CONTROLAR
//(Crear una variable que almacene la etiqueta)

let miNav=document.getElementById("miNav")

//detecto el scroll o movimiento en la ventana(para poder cambiar de color)
window.addEventListener("scroll",function(){
    //para mirar los valores del scroll por que el scroll se maneja con numeros
    if(document.documentElement.scrollTop == 0){

        //Menu transparente
        miNav.classList.add("menu")
        miNav.classList.remove("menu2")

    } else {

        //Menu es de color
        miNav.classList.add("menu2")
        miNav.classList.remove("menu")
    }
    
})