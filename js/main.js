    import { data } from "./data.js";

    let main_DOM = document.querySelector(".main");
   

    data.forEach((cada_item) => {

        let item = document.createElement("div")
        item.className="item";
        item.innerHTML=`
            <div class="cajaimg" >
                <img class="Grafico" src="${cada_item.img}" alt="">
            </div>           
                <h2 class = "Titulo_producto">${cada_item.titulo}</h2>
                <p>${cada_item.descripcion}</p>
                <span>Q. ${cada_item.precio}</span>
           
        `;
        main_DOM.appendChild(item);

    });
   
    let productos = document.querySelectorAll(".item");


   
    function descripcion(){
    
        let caja_descripcion_DOM = document.querySelector(".descripcion_del_producto")    
      
        let index = Array.from(productos).indexOf(this);// Obtiene el índice del producto al que se le dio clic
        let productoSeleccionado = data[index]; // Obtiene los detalles del producto

    // Actualiza el contenido de la sección descripcion_del_producto con los detalles del producto seleccionado
    caja_descripcion_DOM.innerHTML = `
        <div class="one">
            <div class="contenedor_img">
                <img src="${productoSeleccionado.img}" alt="">
            </div>
            <div class="contenedor_texto">
                <h2>${productoSeleccionado.titulo}</h2>
                <p>${productoSeleccionado.descripcion}</p>
                <span>Q. ${productoSeleccionado.precio.toFixed(2)}</span>
            
            </div>
        </div>  
        <div class="two"> 
            <h4>Detalles del servicio</h4>
            <ul>
                ${productoSeleccionado.pasoAPaso.map(paso => `<li>${paso}</li>`).join('')}
            </ul>
        </div>     
    `;

    main_DOM.classList.add("ocultar")

    }

    function RDescrip (){
        let caja_descripcion_DOM = document.querySelector(".descripcion_del_producto")            
        
    }

    productos.forEach ((cada_elemento) => {

        //console.log(cada_elemento);
        cada_elemento.addEventListener("click",descripcion)

    });