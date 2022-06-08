import React from "react";

const ItemListContainer = (props) =>{
    return(
        <div className="contenedorItemList">
            <p className="textoItemList">{props.greeting}</p>
        </div>
    )
}

export default ItemListContainer;