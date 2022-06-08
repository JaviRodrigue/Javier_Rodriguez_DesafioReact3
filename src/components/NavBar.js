import React from "react";
import CartWidget from "./CartWidjet";


const NavBar = () =>{
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
                            <li className="nav-item">
                                <a className="nav-link" href="#">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Nustros Productos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Carrito</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contactanos</a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
                <CartWidget/>
            </nav>
        </header>
    )
}

export default NavBar;