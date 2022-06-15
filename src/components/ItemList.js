import React from "react";
import Item from "./item";

function ItemList({productosList}){
    return(
        productosList.map(p =>
            <Item 
            id={p.id}
            nombre={p.nombre}
            precio={p.precio}
            imagen={p.imagen}
            key={p.id}
            stock={p.stock}/>
        )
    )
}

export default ItemList;