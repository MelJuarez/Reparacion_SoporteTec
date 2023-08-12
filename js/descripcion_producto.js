import { data } from "./data.js"


  /*  let maiin  = document.querySelector("#main");
    export let caja_descripcion = ""

data.forEach((cada_item) => {

    caja_descripcion= document.createElement("div")
    caja_descripcion.className="caja_descrip";
    caja_descripcion.innerHTML=`
        <div class="cajaimg" >
            <img class="Grafico" src="${cada_item.img}" alt="">
        </div>           
            <h2>${cada_item.titulo}</h2>
            <p>${cada_item.descripcion}</p>
            <span>Q. ${cada_item.precio}</span>
       
    `;
    maiin.appendChild(caja_descripcion);

});*/

    let productoSeleccionado = data[index];
    export let caja_descripcion = `
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
                  

    `;

/*********
 * <div class="cajaimg" >
            <img class="Grafico" src="${cada_item.img}" alt="">
        </div>           
            <h2>${cada_item.titulo}</h2>
            <p>${cada_item.descripcion}</p>
            <span>Q. ${cada_item.precio}</span> 
 * **** */

            /*
            <div class="two"> 
            <h4>Detalles del servicio</h4>
            <ul>
                ${productoSeleccionado.pasoAPaso.map(paso => `<li>${paso}</li>`).join('')}
            </ul>
            </div>           
            */