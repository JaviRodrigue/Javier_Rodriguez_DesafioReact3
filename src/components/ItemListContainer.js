import React from "react";
import { useEffect,useState } from "react";
import ItemList from "./ItemList";
import { traerProductos } from "../utils/products";


const ItemListContainer = (props) =>{

    const [products,setProducts] = useState([]);

    useEffect(() =>{
        traerProductos()
            .then((res) => {
                setProducts(res);
            })
            .catch((error) => {
                console.log(error);
            })
    },[])

    return(
        <>
            <div className="contenedorItemList">
                <p className="textoItemList">{props.greeting}</p>
            </div>
            <div className="contenedorProductos">
                <ItemList items={products} />
            </div>
        </>
    )
}

export default ItemListContainer;