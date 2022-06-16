import React from "react";


const Item = ({item}) =>{
    return(
        <div className="card">
            <img src={item.imagen} alt="hola" />
            <h2>{item.nombre}</h2>
            <span>{item.precio}</span>
        </div>
    )
}

export default Item;