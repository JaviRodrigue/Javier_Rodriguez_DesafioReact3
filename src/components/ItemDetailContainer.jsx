import React from "react";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import {ProductoById} from "../utils/customFetch"


const ItemDetailContainer = () => {
    const [product,setProduct] = useState();

    const {id} = useParams()

    useEffect(() =>{
        ProductoById(parseInt(id))
        .then(response => {
            setProduct(response)
        })
    },[])

    return(
        <div>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer;




