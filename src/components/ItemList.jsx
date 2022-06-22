import React from "react";
import Item from "./item";

function ItemList({products}){
    return(
        products.map(prod =>
            <Item
            key={prod.id}
            {...prod}
            />
        )
        )
}

export default ItemList;