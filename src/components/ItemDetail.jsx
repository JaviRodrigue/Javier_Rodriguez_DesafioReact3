import React from "react";
import { useState } from "react";
import ItemCount from "./ItemCount";
import {Link} from "react-router-dom";

const ItemDetail = ({nombre, id , descripcion , stock, precio, imagen}) => {
    const [eliminar, setEliminar] = useState(0);

    const onAdd = (contador) => {
        setEliminar(contador);
    }

    return(
        <div className="contenedorItem">
            <img src={imagen} alt={id} />
            <div className="contenedorDetalle">
                <h3>{nombre}</h3>
                <p>{descripcion}</p>
                <span>Precio:${precio}</span>
                <span>Stock:{stock}</span>
                <div className="confirmarContainer">
                    {eliminar ? <Link to={"/cart"} className="confirmar"><button clasName="btn">Confirmar Compra</button></Link> : <ItemCount stock={stock} initial={1} onAdd={onAdd} />}
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;