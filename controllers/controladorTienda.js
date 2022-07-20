let productos =[

    {
        nombre:"gimnasio",
        precio:64000,
        fotos:[ 'https://firebasestorage.googleapis.com/v0/b/tiendacomfama-1aecc.appspot.com/o/imagen1.jpg?alt=media&token=dd33e2c7-06bf-4f33-9657-233d2a2fa867','https://firebasestorage.googleapis.com/v0/b/tiendacomfama-1aecc.appspot.com/o/imagen2.jpg?alt=media&token=b69e1daf-1fc6-46c4-a5d9-c40611c46a69']

    },
    {
        nombre:"elemento1",
        precio:35000,
        fotos:['https://firebasestorage.googleapis.com/v0/b/tiendacomfama-1aecc.appspot.com/o/imagen3.jpg?alt=media&token=9b65da28-521a-438b-8931-06760145ecf3','https://firebasestorage.googleapis.com/v0/b/tiendacomfama-1aecc.appspot.com/o/imagen4.jpg?alt=media&token=352e2954-1e5e-4101-93b6-84c457743f29']
    },
    {
        nombre:"pruebita",
        precio:35000,
        fotos:['https://firebasestorage.googleapis.com/v0/b/tiendacomfama-1aecc.appspot.com/o/imagen5.jpg?alt=media&token=b2e4196b-34c2-4117-9d98-12f7bdc84bd3','https://firebasestorage.googleapis.com/v0/b/tiendacomfama-1aecc.appspot.com/o/imagen56.jpg?alt=media&token=269e53e1-b155-41b5-a3af-ba6b1cc61dcd']
    },
    {
        nombre:"prueba",
        precio:35000,
        fotos:['https://firebasestorage.googleapis.com/v0/b/tiendacomfama-1aecc.appspot.com/o/imagen7.jpg?alt=media&token=a525b495-b5cb-48d1-a7d8-72a62e4cf7ab','https://firebasestorage.googleapis.com/v0/b/tiendacomfama-1aecc.appspot.com/o/imagen56.jpg?alt=media&token=269e53e1-b155-41b5-a3af-ba6b1cc61dcd']
    }
]

let fila=document.getElementById("fila")

//recorriendo el arreglo

//dentro del foreach va una funcion anonima y dentro de la funcion va el auxiliar
productos.forEach(function(producto){

        let columna=document.createElement("div")
        //agregar col a div
        columna.classList.add("col")

        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","h-100","text-center")

        let foto=document.createElement("img")
        foto.classList.add("img-fluid","w-100","h-100")
        foto.src=producto.fotos[0]

        let titulo=document.createElement("h3")
        titulo.textContent=producto.nombre
        titulo.classList.add("text-center")

        let precio=document.createElement("h2")
        precio.classList.add("fw-bold")
        precio.textContent='$'+producto.precio

        //detectando eventos
        //sobre quien quiero detectar el evento
        tarjeta.addEventListener("mouseover",function(){
            foto.src=producto.fotos[1]
        })
        tarjeta.addEventListener("mouseleave",function(){
            foto.src=producto.fotos[0]
        })
            //padres e hijos
        tarjeta.appendChild(foto)
        tarjeta.appendChild(titulo)
        tarjeta.appendChild(precio)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
        
})