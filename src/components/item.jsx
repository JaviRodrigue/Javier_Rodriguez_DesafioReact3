import React from "react";
import {Link} from "react-router-dom";



const Item = ({id,nombre,imagen,precio}) =>{
    return(
        <div className="card">
            <img src={imagen} alt="hola" />
            <h2>{nombre}</h2>
            <span>{precio}</span>
            <Link className="buttonCard" to={`/detail/${id}`}>Ver Detalle</Link>
        </div>
    )
}

export default Item;