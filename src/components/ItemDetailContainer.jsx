import React from "react";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
// import {ProductoById} from "../utils/customFetch"
import { collectionProd } from '../utils/firebase';
import { doc, getDoc } from 'firebase/firestore';


const ItemDetailContainer = () => {
    const [product,setProduct] = useState();

    const {id} = useParams()

    useEffect(() =>{

        const ref = doc(collectionProd, id);
        getDoc(ref)
            .then((response) => {
                setProduct({
                    id : response.id,
                    ...response.data()
                })
            })

        // ProductoById(parseInt(id))
        // .then(response => {
        //     setProduct(response)
        // })
    },[id])

    return(
        <div>
            {product?.length <= 0 ? <p className="loader">Cargando...</p> : <ItemDetail {...product}/>}
        </div>
    )
}

export default ItemDetailContainer;




