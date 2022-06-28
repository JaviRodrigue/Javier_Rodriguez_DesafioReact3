import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import { CartProvider } from "./CartContext/CartContext";

const App = () =>{
    return(
        <div className="App">
            <CartProvider>
                <BrowserRouter>
                    <NavBar inHeader={true}/>
                    <Routes>
                        <Route path="/" element={<ItemListContainer/>} />
                        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
                        <Route path='/detail/:id' element={<ItemDetailContainer/>} />
                        <Route path='cart' element={<Cart/>}></Route>
                    </Routes>
                </BrowserRouter>
            </CartProvider>
        </div>
    )
}

export default App;
