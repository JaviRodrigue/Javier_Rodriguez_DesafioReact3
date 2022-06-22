import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";

const App = () =>{
    return(
        <div className="App">
        <BrowserRouter>
            <NavBar inHeader={true}/>
            <Routes>
                <Route path="/" element={<ItemListContainer/>} />
                <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
                <Route path='/detail/:id' element={<ItemDetailContainer/>} />
            </Routes>
        </BrowserRouter>
    </div>
    )
}

export default App;
