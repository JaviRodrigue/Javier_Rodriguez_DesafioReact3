import React from "react";
import { useContext } from "react";
import { Contexto } from "../CartContext/CartContext";
import { Link } from "react-router-dom";


const Cart = () =>{
    const {cartItem,eliminarItem,limpiarCarrito,cartTotalProducts,contadorSubtotal,obtenerTotal} = useContext(Contexto);

    // si mi carrito esta vacio, muestro un mensaje
    if(cartTotalProducts() == 0){
        console.log("carrito vacio")
        return(
            <div className="ContenedorVacio">
                <h3 className="tituloVacio">Carrito Vacio</h3>
                <button><Link to={"/"}>Volver a Comprar</Link></button>
            </div>
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
                                    <div className="containerNombreCart">
                                        <p>{item.nombre}</p>
                                    </div>
                                    <div className="containerPrecioCart">
                                        <p>Precio:${item.precio}</p>
                                    </div>
                                    <div className="containerCatidadCart">
                                        <p>Cantidad Pedida: {item.quantity}</p>
                                    </div>
                                    <div className="containerPorductTotal">
                                        <p>${contadorSubtotal(item.precio, item.quantity)}</p>
                                    </div>
                                    <div className="containerButtonCart">
                                        <button className="btn btn-danger" onClick={()=> eliminarItem(item.id)}>-</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="containerTotalPrecio">
                    <h3>Total a Pagar: ${obtenerTotal()}</h3>
                </div>
                <div className="vaciarCarrito">
                    <button className="btn btn-danger" onClick={limpiarCarrito}>Vaciar Carrito</button>
                </div>
            </>
        )
    }
    
   
}

export default Cart;
