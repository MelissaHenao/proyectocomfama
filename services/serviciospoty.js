//receta para consumir apis con java escript

//1. escribo  la direccion ( para donde voy)-- URI DEL SERVICIO

const URI='https://api.spotify.com/v1/artists/790FomKkXshlbRYZFtlgla/top-tracks?market=us'

const URI2='https://api.spotify.com/v1/artists/3JCyEziWwDZksR1WY8EckM/top-tracks?market=us'

// 2. a hacer que ?
// Configuro la peticion (le digo a que voy)-- una peticion tiene (metodo, cabecera, body).(la peticion es un objeto por que guardo metodo, cabecera, body)

const PETICION={
    //palabras reservadas de js, pero que hacen parte de la peticion (metodo,headers,body)
    method:'GET',
    //un headers es un objeto tambien
    headers:{
        Authorization:'Bearer BQAORRCDdVl8oj0d2n_pWdX1WYzeeLxHlLyjVrK7I0Nn8iWa60n8gA-bmEQfq9xQZZvT3LJ7s4uPukk5pwALvxUgnlwgHwP4Lwf3Y8IphebbFtZpAKsISrtiPoKxnvsrkDKe7ZL0Z9V7ZpLoeptMTOkeHU5vYChI_sj_TgPwLocOcqS2kLjMaRPI3NIHbSc'
    }
    //no va body por que get lleva parametros y los parametros solo van en el headers
}
//3. ejecutar el plan (1 y 2)--- consuma el API
//Para consumir el Api  hay una funcion (palabra reservada llamada fetch)

// DENTRO DE FECTH va para donde voy y lo que quiero hacer y como ya las declare, entonces solo llamo la variable que tiene la url y la peticion.

//promesa(funcion asincrona)
fetch(URI,PETICION)
.then(function(respuesta){
    //debo asegurar el formato de la respuesta
    return respuesta.json()
    // retorno esta respuesta pero asegurandome del formato de respuesta json
})
//dentro de la funcion anonima siempre va la respuesta
.then(function(respuesta){
    console.log(respuesta)// Mostrando objeto
    console.log(respuesta.tracks)//Mostrar arreglo
   pintarCanciones(respuesta.tracks)
}) // dentro de esta funcion, hago lo que quiera con la respuesta

// si no me dio, le pregunto a el mensajero por que 
.catch(function(respuesta){
    console.log(respuesta)
})

// funcion para renderizar datos(pintar)
function pintarCanciones(canciones){

    //pasos para pintar o renderizar en la interface 
    //1.creo una referencia(variable) a la base sobre la cual voy a pintar

        //traigo la etiqueta desde html
    let fila=document.getElementById("fila")

    //2.recorrer los datos que me llegan (para recorrer lo ideal es utilizar un foreach)
    //para esculcar algo rapido debo crear una function anonima por que se ejecuta mientras recorre
    canciones.forEach(function(cancion){
        //aplicando TRAVERSING(ALREVES)
        //2.1 Creando columnas
        //le estamos diciendo que se cree un elemento 
        let columna=document.createElement("div")
        //agregar clase de columna a javaScript ( utilizo la etiqueta que cree "columna")
        columna.classList.add("col")

        //2.2 creando la tarjeta
        let tarjeta=document.createElement("div")
        //agregar clase de columna a javaScript ( utilizo la etiqueta que cree "tarjeta")
        tarjeta.classList.add("card","h-100","p-3","shadow")

        //creando audio
        let audio=document.createElement("audio")
        //agregar clase de la columna a javaScript (utilizo la etiqueta que cree"audio")
        audio.classList.add("w-100","mt-5")
        //esto es para modificar el audio(traerlo desde la API)
        audio.src=cancion.preview_url
        //la etiqueta audio por defecto uno coloca donde esta el audio, pero para poder reproducir un audio debo poner los controles
        audio.setAttribute("controls","controls")

        //2.4 CREANDO EL NOMBRE DE LA CANCION
        let nombreCancion=document.createElement("h3")
        nombreCancion.classList.add("text-center")
        //debo decir que texto quiero que tenga y para eso utilizo tambien el textContent
        nombreCancion.textContent=cancion.name

        //2.5 CREANDO LAS FOTOS DEL ALBUM (Con create elemento creo y debo poner una etiqueta)
        let fotoAlbum=document.createElement("img")
        fotoAlbum.classList.add("img-fluid","w-100",)
        fotoAlbum.src=cancion.album.images[0].url


        //2.6 CREANDO LA POPULARIDAD

        let populari=document.createElement("h5")
        populari.classList.add("mt-3","fw-bold")
        populari.textContent='popularidad: '+ cancion.popularity

        //2.7 creando el track

        let track=document.createElement("h6")
        track.classList.add("mt-2")
        track.textContent=cancion.track_number
        //final (defino jerarquias (padres e hijos)-(div dentro del div))
        //siempre empiezo del elemento mas interno hasta el mas externo

         //la tarjeta tiene un hijo (quien)
         tarjeta.appendChild(nombreCancion)
         //la tarjeta tiene un hijo (quien)
         tarjeta.appendChild(fotoAlbum)
        //la tarjeta tiene un hijo (quien)
         tarjeta.appendChild(populari)
         //la tarjeta tiene un hijo (quien)
         tarjeta.appendChild(track)
        //la tarjeta tiene un hijo(quien)
        tarjeta.appendChild(audio)
        //la columna tiene un hijo  que se llama tarjeta
        columna.appendChild(tarjeta)
        //la fila tiene un hijo que se llama columna
        fila.appendChild(columna)

    })

}