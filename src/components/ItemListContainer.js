import React from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = (props) =>{
    return(
        <>
            <div className="contenedorItemList">
                <p className="textoItemList">{props.greeting}</p>
            </div>
            <div className="contenedorCompra">
                <ItemCount stock={5} initial={1} onAdd={()=>{}} />
                <button className="btn btn-primary btnCarrito">Agregar al Carrito</button>
            </div>
        </>
    )
}

export default ItemListContainer;