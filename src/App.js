import React from "react";

import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Main from "./components/Main";


const App = () =>{
    return(
        <>
            <NavBar/>
            <>
                <ItemListContainer greeting='Bienvenido a Nuestra Tienda'/>
            </>
            <Main/>
        </>
    )
}

export default App;
