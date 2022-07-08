//receta para consumir apis con java escript

//1. escribo  la direccion ( para donde voy)-- URI DEL SERVICIO

const URI='https://api.spotify.com/v1/artists/790FomKkXshlbRYZFtlgla/top-tracks?market=us'

// 2. a hacer que ?
// Configuro la peticion (le digo a que voy)-- una peticion tiene (metodo, cabecera, body).(la peticion es un objeto por que guardo metodo, cabecera, body)

const PETICION={
    //palabras reservadas de js, pero que hacen parte de la peticion (metodo,headers,body)
    method:'GET',
    //un headers es un objeto tambien
    headers:{
        Authorization:'Bearer BQD6LMeoZImMl96Yhr6ALOcV7bQP8e4lu0YHHEZtvVGaRAlJWVnluABiqEyrCsvjT3FXAtdtZEV5RVUsTK9sAts_BwUBCm7O5GmW-0RQDL0OQ0Te748ZDuHqmDLzLa3OGHDt0Q_SAsEdqkRY_ai-IyfDRAUPjKjnZRtz0CQxiOn9iM8VXXez6Z-79ytZjPg'
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
    respuesta.tracks.forEach(function(cancion){
        console.log(cancion.preview_url)
    });
}) // dentro de esta funcion, hago lo que quiera con la respuesta

// si no me dio, le pregunto a el mensajero por que 
.catch(function(respuesta){
    console.log(respuesta)
})