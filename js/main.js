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
                <span>Q. ${cada_item.precioT}</span>
                
                `;
        main_DOM.appendChild(item);

    });
   
    let productos = document.querySelectorAll(".item");


   
    function descripcion(){
    
        let caja_descripcion_DOM = document.querySelector(".descripcion_del_producto")    
      
        let index = Array.from(productos).indexOf(this);// Obtiene el índice del producto al que se le dio clic
        let productoSeleccionado = data[index]; // Obtiene los detalles del producto

        let autoDiv = '';
        if (productoSeleccionado.DesdeCasa) {
           autoDiv = '<div class="Auto">Desde casa</div>';
        }
        

    // Actualiza el contenido de la sección descripcion_del_producto con los detalles del producto seleccionado
    caja_descripcion_DOM.innerHTML = `
        <div class="one">
            
            <button class="regresar-btn">⮌</button> 
            <div class="contenedor_img">
                <img src="${productoSeleccionado.img}" alt="">
            </div>

            <div class="one-details">
            
                <div class="contenedor_texto">
                    <h2>${productoSeleccionado.titulo}</h2>
                    <p>${productoSeleccionado.descripcion}</p>
                </div>

                <div class="opc-compra">
                    <span>En Taller <br>Q. ${productoSeleccionado.precioT.toFixed(2)}<br></span>
                    <span>A Domicilio <br>Q. ${productoSeleccionado.precioD.toFixed(2)}</span>
                </div>

                <div class="btn-compra">
                    ${autoDiv}
                    <div>Comprar</div>
                </div>
                
            </div> 
                    
        </div>  

        
    `;

    
        main_DOM.classList.add("ocultar")
        
        let regresarBtn = caja_descripcion_DOM.querySelector('.regresar-btn');
        regresarBtn.addEventListener('click', regresarAlInicio);

            // Agregar evento de clic para el botón "Auto"
        let autoBtn = caja_descripcion_DOM.querySelector('.Auto');
        autoBtn.addEventListener('click', () => mostrarPasosAuto(index));

    }

    /*
      <div class="two"> 
            <h4>Detalles del servicio</h4>
            <ul>
                ${productoSeleccionado.pasoAPaso.map(paso => `<li>${paso}</li>`).join('')}
            </ul>
        </div>       
    */
    //<div class ="regresar-btn">⮌</div>
    
    productos.forEach ((cada_elemento) => {

        //console.log(cada_elemento);
        cada_elemento.addEventListener("click",descripcion)

    });


    function mostrarPasosAuto(index) {
        let caja_descripcion_DOM = document.querySelector(".descripcion_del_producto");
        let productoSeleccionado = data[index];
        
        caja_descripcion_DOM.innerHTML = `
            <div class="one">
            <button class="regresar-btn">⮌</button> 
                <div class="contenedor_img">
                    <img src="${productoSeleccionado.img}" alt="">
                </div>
                <div class="contenedor_texto">
                    <h2>${productoSeleccionado.titulo}</h2>
                    <p>${productoSeleccionado.descripcion}</p>
                </div>

                <div class="twoo"> 
                    <div class="three">
                        <h4>Pasos a seguir</h4>
                        <h4>Materiales</h4>
                    </div>  
                    <div class="four">
                        <ol class="abc"><br>
                            ${productoSeleccionado.pasoAPaso.map(paso => `<li>${paso}</li>`).join('')}
                        </ol>
                        
                        <ol class=""def><br>
                            ${productoSeleccionado.herramientas.map(paso => `<li>${paso}</li>`).join('')}
                        </ol>
                    </div>

                    <div class="video-contenedor">
                        <h4>Video Tutorial</h4>
                        <iframe width="560" height="315" src="${productoSeleccionado.videoLink}" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
            
        `;
        main_DOM.classList.add("ocultar")

        let regresarBtn = caja_descripcion_DOM.querySelector('.regresar-btn');
        regresarBtn.addEventListener('click', regresarAlInicio);
    }

    function regresarAlInicio() {
        let caja_descripcion_DOM = document.querySelector(".descripcion_del_producto");
        caja_descripcion_DOM.innerHTML = ''; // Limpiar contenido
        main_DOM.classList.remove("ocultar"); // Mostrar la sección main nuevamente
    }

   