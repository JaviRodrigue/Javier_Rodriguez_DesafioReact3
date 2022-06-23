import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";

const App = () =>{
    return(
        <div className="App">
        <BrowserRouter>
            <NavBar inHeader={true}/>
            <Routes>
                <Route path="/" element={<ItemListContainer/>} />
                <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
                <Route path='/detail/:id' element={<ItemDetailContainer/>} />
                <Route path='cart' element={<Cart/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
    )
}

export default App;
