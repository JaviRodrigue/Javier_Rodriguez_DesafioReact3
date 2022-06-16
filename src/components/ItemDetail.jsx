import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({product}) => {
    return(
        <div className="contenedorItem">
            <img src={product.imagen} alt="imagen" />
            <div className="contenedorDetalle">
                <h3>{product.nombre}</h3>
                <p>{product.descripcion}</p>
                <span>Precio:${product.precio}</span>
                <span>Stock:{product.stock}</span>
                <ItemCount stock={product.stock} initial={1} />
            </div>
        </div>
    )
}

export default ItemDetail;