import React from "react";
import { useContext } from "react";
import { Contexto } from "../CartContext/CartContext";
import { Link } from "react-router-dom";
import { db } from "../utils/firebase";
import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import Form from "./Form";

const Cart = () =>{
    const {cartItem,eliminarItem,limpiarCarrito,cartTotalProducts,contadorSubtotal,obtenerTotal} = useContext(Contexto);
    const [data, setData] = useState({nombre:"",email:"",tel:""})
    const [orderId, setOrderId] = useState("");

    const handleChange = (e) =>{
        const {nombre, value} = e.target;
        setData({
            ...data,
            [e.target.nombre]:e.target.value,
        })
    };

    const handleSubmit = (e) =>{
        e.preventDefault()
        const orden = {
            buyer: {
                nombre: data.nombre,
                email: data.email,
                tel: data.tel,
            },
            cartItem,
            total: obtenerTotal(),
            date:serverTimestamp(),
        };
        console.log(orden);
        const ref = collection (db, "orden");
        addDoc(ref, orden).then((res) =>{
            setOrderId(res.id)
            limpiarCarrito();
        })
    };

    if(orderId !== ""){
        console.log({orderId});
        return <h2 className="tituloFinalizarCompra">Numero de compra de envio es:{orderId}</h2>
    }




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
                <Form
                    handleChange={handleChange}
                    data={data}
                    handleSubmit={handleSubmit}
                />
            </>
        )
    }
    
   
}

export default Cart;
