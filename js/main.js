    import { data } from "./data.js";

    console.log(data)
    let main_DOM = document.querySelector("#main");

    data.forEach((cada_item) => {

        let item = document.createElement("div")
        item.className="item";
        item.innerHTML=`
            <div class="cajaimg" >
                <img class="Grafico" src="${cada_item.img}" alt="">
            </div>           
                <h2>${cada_item.titulo}</h2>
                <p>${cada_item.descripcion}</p>
                <span>Q. 100</span>
           
        `;
        main_DOM.appendChild(item);

    });
   