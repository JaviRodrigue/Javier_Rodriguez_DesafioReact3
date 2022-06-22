import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({nombre, id , descripcion , stock, precio, imagen}) => {
    return(
        <div className="contenedorItem">
            <img src={imagen} alt={id} />
            <div className="contenedorDetalle">
                <h3>{nombre}</h3>
                <p>{descripcion}</p>
                <span>Precio:${precio}</span>
                <span>Stock:{stock}</span>
                <ItemCount stock={stock} initial={1} />
            </div>
        </div>
    )
}

export default ItemDetail;