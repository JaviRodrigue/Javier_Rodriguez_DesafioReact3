import React from "react";
import { useEffect,useState } from "react";
import {useParams} from "react-router-dom";
import {customFecth, ProductoById, ProductoFiltrar} from "../utils/customFetch";
import ItemList from "./ItemList";
import { collectionProd } from "../utils/firebase";
import { getDocs, query, where } from "firebase/firestore";


const ItemListContainer = () =>{

    const [items, setItems] = useState([]);

    const {categoryId} = useParams();

    useEffect(() => {

        const consulta = getDocs(collectionProd);

        consulta
        .then((resultado) => {
            const productosMapeados = resultado.docs.map(referencia => {
                const aux = referencia.data();
                aux.id = referencia.id;
                return aux;
            })
            setItems(productosMapeados);
        })
        .catch((error) =>{
            console.log(error);
        })
        // if(!categoryId){
        //     customFecth().then(response =>{
        //         setItems(response);
        //     })
        // }else{
        //     ProductoFiltrar(categoryId).then(response =>{
        //         setItems(response)
        //     })
        // }
    },[categoryId])

    return(
        <>
            <div className="contenedorTItuloProduct">
                <h2>Productos</h2>
            </div>
            <div className="contenedorProductos">
                {items?.length <= 0 ? <p className="loader">Cargando...</p>: <ItemList products={items} />}
            </div>
        </>
    )
}

export default ItemListContainer;