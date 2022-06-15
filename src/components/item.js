import React from "react";
import ItemCount from "./ItemCount";

const Item = ({id,nombre,precio,imagen,stock}) =>{
    return(
        <div className="contenedorCard" key={id}>
            <div className="card">
                <img className="card-img-top" src={imagen} alt="hola"/>
                <h3 className="card-tittle">{nombre}</h3>
                <p className="card-text">${precio}</p>
                <ItemCount stock={stock} onAdd={()=>{}} initial= {0} />
            </div>
        </div>
    )
}

export default Item;