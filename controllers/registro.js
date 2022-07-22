let boton =document.getElementById("boton")

boton.addEventListener("click",function(evento){
    //cuando yo tengo un formulario con el boton de submit, por defecto el formulario se reinicia, lo que hace para es el preventDefault()

    evento.preventDefault()
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    console.log(email,password)
})