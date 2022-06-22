import React from "react";
import { useEffect,useState } from "react";
import {useParams} from "react-router-dom";
import {customFecth, ProductoById, ProductoFiltrar} from "../utils/customFetch";
import ItemList from "./ItemList";



const ItemListContainer = () =>{

    const [items, setItems] = useState([]);

    const {categoryId} = useParams();

    useEffect(() => {
        if(!categoryId){
            customFecth().then(response =>{
                setItems(response);
            })
        }else{
            ProductoFiltrar(categoryId).then(response =>{
                setItems(response)
            })
        }
    },[categoryId])

    return(
        <>
            <div className="contenedorTItuloProduct">
                <h2>Productos</h2>
            </div>
            <div className="contenedorProductos">
                <ItemList products={items} />
            </div>
        </>
    )
}

export default ItemListContainer;