import React from "react";
import { useState } from "react";
import swal from "sweetalert";

const ItemCount = ({stock,initial,onAdd}) =>{
    const [contador,setContador] = useState(initial);

    // Funcion para aumentar 
    const aumentar = () =>{
        if(contador < stock){
            setContador(contador + 1);
        }else{
            swal({
                title:"Lo sentimos",
                text:`El stock maximo de este producto es: ${stock}`,
                icon:"error"
            })
        }
    }
    // Funcion para disminuir
    const disminuir = () =>{
        if(contador > 0){
            setContador(contador - 1);
        }
    }

    return(
        <section className="cardContador">
            <button className="btn btn-danger btnResta" onClick={disminuir}>-</button>
            <p className="mostrarNumero">{contador}</p>
            <button className="btn btn-primary btnSuma" onClick={aumentar}>+</button>
        </section>
    )
}

export default ItemCount;