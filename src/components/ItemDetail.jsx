import React from "react";
import { useState } from "react";
import ItemCount from "./ItemCount";
import {Link} from "react-router-dom";
import { Contexto } from "../CartContext/CartContext";
import { useContext } from "react";

const ItemDetail = ({nombre, id , descripcion , stock, precio, imagen}) => {
    const [eliminar, setEliminar] = useState(false);

    const {agregarItem} = useContext(Contexto);

    const onAdd = (quantity) => {
        agregarItem(id,nombre,precio,quantity,imagen);
        setEliminar(true);
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
                    {eliminar ? <Link to={"/cart"}>Confirmar Compra</Link> : <ItemCount stock={stock} initial={1} onAdd={onAdd} />}
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;