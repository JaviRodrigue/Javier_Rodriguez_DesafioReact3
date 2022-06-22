import Productos from "./products";

export const customFecth = () =>{
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(Productos)
        }, 1000);
    })
}

export const ProductoById = (id) =>{
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(Productos.find(product => product.id === id))
        },1000)
    })
}

export const ProductoFiltrar = (categoryId) => {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(Productos.filter(product => product.categoryId === categoryId));
        },1000);
    })
}




