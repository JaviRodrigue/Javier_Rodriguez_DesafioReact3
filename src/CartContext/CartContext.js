import { createContext} from "react";
import { useState } from "react";

// Creo el contexto
const Contexto = createContext();

// Creo el provider
const CartProvider = ({children}) =>{
    const [cartItem, setCartItem] = useState([]);

    // funcion para agregar un producto al carrito
    const agregarItem = (id,nombre,precio,quantity,imagen) =>{
        if(verificar(id)){
            let index = cartItem.findIndex((index) => (index.id === id));
            let copiaCart = [...cartItem];
            copiaCart[index].quantity =+ quantity;
            setCartItem(copiaCart);
        }else{
            const itemagregado = {id,nombre,precio,quantity,imagen};
            setCartItem([...cartItem,itemagregado]);
        }
    }

    // funcion para chequear si el item ya se encuentra en el carrito

    const verificar = (id) =>{
        return cartItem.some((item)=> (item.id == id))
    }

    // funcion para eliminar un producto del carrito
    const eliminarItem = (id) =>{
        return setCartItem(cartItem.filter((item) => item.id !== id))
    }

    // funcion para limpiar el carrito
    const limpiarCarrito = () =>{
        setCartItem([]);
    }

    // ontener el numero total productos
    const cartTotalProducts = () =>{
        let cant = 0;
        cartItem.forEach((item) =>{
            cant = cant + item.cantidad;
        })
        return cant
    }

    return(
        <Contexto.Provider value={{
            cartItem,   
            agregarItem,
            eliminarItem,
            limpiarCarrito,
            cartTotalProducts
        }}>
            {children}
        </Contexto.Provider>
    )
}

export {CartProvider, Contexto};