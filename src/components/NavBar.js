import React from "react";
import CartWidget from "./CartWidjet";
import {Link} from "react-router-dom";


const NavBar = (inHeader) =>{
    return(
        <header>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
                <div className="container-fluid">
                    <div className="navTitulo">
                        <h1><span>B</span>log<span>B</span>urger</h1>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav ">
                            <li className="nav-item"><Link to='/' >Home</Link></li>
                            <li className="nav-item"><Link to='/category/uno'>Categoria 1</Link></li>
                            <li className="nav-item"><Link to='/category/dos'>Categoria 2</Link></li>
                            <li className="nav-item"><Link to='/category/tres'>Categoria 3</Link></li>
                            <li className="nav-item"><Link to="/cart">carrito</Link></li>
                        </ul>
                    </div>
                </div>
                <CartWidget/>
            </nav>
        </header>
    )
}

export default NavBar;