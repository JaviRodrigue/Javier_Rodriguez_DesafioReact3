import React from "react";
import { useContext } from "react";
import { Contexto } from "../CartContext/CartContext";


const Cart = () =>{
    const {cartItem,eliminarItem,limpiarCarrito,cartTotalProducts} = useContext(Contexto);

    // si mi carrito esta vacio, muestro un mensaje
    if(cartTotalProducts() == 0){
        console.log("carrito vacio")
        return(
            <h3 className="tituloVacio">Carrito Vacio</h3>
        )
    }else{
        return(
            <>
                <div>
                    <div className="carrito">
                        <h2>Bienvenido Al carrito</h2>
                    </div>
                    <div className="carritoItems">
                        {cartItem.map((item)=>(
                            <div key={item.id} className="contenedorUnico">
                                <div className="containerImgCart">
                                    <img src={item.imagen} alt={item.id} />
                                </div>
                                <div className="conainerGeneral">
                                    <div class="containerNombreCart">
                                        <p>{item.nombre}</p>
                                    </div>
                                    <div className="containerPrecioCart">
                                        <p>{item.precio}</p>
                                    </div>
                                    <div className="containerCatidadCart">
                                        <p>{item.quantity}</p>
                                    </div>
                                    <div className="containerButtonCart">
                                        <button className="btn btn-danger" onClick={()=> eliminarItem(item.id)}>-</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="vaciarCarrito">
                    <button className="btn btn-danger" onClick={limpiarCarrito}>Vaciar Carrito</button>
                </div>
            </>
        )
    }
    
   
}

export default Cart;
