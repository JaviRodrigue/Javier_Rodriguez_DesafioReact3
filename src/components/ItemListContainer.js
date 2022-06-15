import React from "react";
import { useEffect,useState } from "react";
import customFecth from "../utils/customFetch";
import productosList from "../utils/productosList";
import ItemList from "./ItemList";


const ItemListContainer = (props) =>{

    const [items,setItems] = useState([]);

    useEffect(() =>{
        customFecth(2000,productosList)
        .then(resolve => setItems(resolve));
    },[items])

    console.log(items);

    return(
        <>
            <div className="contenedorItemList">
                <p className="textoItemList">{props.greeting}</p>
            </div>
            <div className="contenedorProductos">
                <ItemList productosList={items} />
            </div>
        </>
    )
}

export default ItemListContainer;