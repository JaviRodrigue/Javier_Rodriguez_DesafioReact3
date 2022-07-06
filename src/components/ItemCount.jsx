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

    const confirmarCompra = () =>{
        if(contador === 0){
            swal({
                title:"Advertencia",
                text:"Debe de agregar un producto",
                icon:"warning"
            })
        }else{
            swal({
                title:"Success",
                text:"Agregaste correctamenete el producto",
                icon:"success"
            });
            onAdd(contador);
        }
    }

    return(
        <>
            <div className="cardContador">
                <button className="btn btn-danger btnResta" onClick={disminuir}>-</button>
                <p className="mostrarNumero">{contador}</p>
                <button className="btn btn-primary btnSuma" onClick={aumentar}>+</button>
            </div>
            <div>
                <button className="btn btn-primary btnConfirmar" onClick={confirmarCompra}>Confirmar</button>
            </div>
        </>
    )
}

export default ItemCount;