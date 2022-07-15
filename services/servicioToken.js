//peticion tipo post
//consumir un servicio

//PRIMERO COPIO LA URI DENTRO DE UNA VARIABLE

const URI ='https://accounts.spotify.com/api/token'

const DATO1="client_id=23ac285d78a54999a27aba4b87cd3cd3"
const DATO2="client_secret=e06f2a2a492b40c89e941206e3434355"
const DATO3="grant_type=client_credentials"

//Generar la peticion
const PETICION={
    method:"POST",
    headers:{
        //se ingresa etre comilas por que son dos plabaras (FORMATO QUE UTILIZA SPOTY)
       "Content-Type":"application/x-www-form-urlencoded" },
       //DATO 1 CONCATENADO CON & + CON DATO2 Y ASI SUCESIVAMENTE, ESTO ES POR QUE SPOTI ENTREGA UN FORMATO X-WWW-FORM-URLENCODED EL CUAL VA COMO EL LINEA CONCATENADO
    body:DATO1+'&'+DATO2+'&'+DATO3

}
//el fetch es com oun taxista, lo primero que hago es decirle para donde voy (URI) y que voy hacer
fetch(URI,PETICION)
//siempre va una funcion anonima(que solo se ejecuta una vez, en cada .then y catch)
.then(function(respuesta){
    //la respuesta va en json, por eso le coloco.jeson
    return respuesta.json()
})
.then(function(respuesta){
    console.log(respuesta)
    //Armando el token( por que spotify lo trajo separado)
    // primero creo una variable
    const TOKEN= respuesta.token_type+" "+respuesta.access_token
    console.log(TOKEN)
    //TRATAR DE PEGAR LA RUTINA DEL GET
    const URI='https://api.spotify.com/v1/artists/790FomKkXshlbRYZFtlgla/top-tracks?market=us'

const URI2='https://api.spotify.com/v1/artists/3JCyEziWwDZksR1WY8EckM/top-tracks?market=us'


const PETICION={
   
    method:'GET',
    
    headers:{
        Authorization:TOKEN
    }
   
}

fetch(URI,PETICION)
.then(function(respuesta){
    
    return respuesta.json()
    
})

.then(function(respuesta){
    console.log(respuesta)
    console.log(respuesta.tracks)
   pintarCanciones(respuesta.tracks)
}) 

.catch(function(respuesta){
    console.log(respuesta)
})


function pintarCanciones(canciones){

  
    let fila=document.getElementById("fila")

    
    canciones.forEach(function(cancion){

        let columna=document.createElement("div")
        
        columna.classList.add("col")

        
        let tarjeta=document.createElement("div")
        
        tarjeta.classList.add("card","h-100","p-3","shadow")

        
        let audio=document.createElement("audio")
        
        audio.classList.add("w-100","mt-5")
        audio.src=cancion.preview_url
        audio.setAttribute("controls","controls")

        
        let nombreCancion=document.createElement("h3")
        nombreCancion.classList.add("text-center")
        
        nombreCancion.textContent=cancion.name

        
        let fotoAlbum=document.createElement("img")
        fotoAlbum.classList.add("img-fluid","w-100",)
        fotoAlbum.src=cancion.album.images[0].url


        

        let populari=document.createElement("h5")
        populari.classList.add("mt-3","fw-bold")
        populari.textContent='popularidad: '+ cancion.popularity

       

        let track=document.createElement("h6")
        track.classList.add("mt-2")
        track.textContent=cancion.track_number
        

         
         tarjeta.appendChild(nombreCancion)
         tarjeta.appendChild(fotoAlbum)
         tarjeta.appendChild(populari)
         tarjeta.appendChild(track)
        tarjeta.appendChild(audio)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)

    })

}
})
.catch(function(respuesta){
    console.log(respuesta)
})