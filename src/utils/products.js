export const productos = [
    {
        id:1,
        nombre:"Hamburguesa Bomber",
        precio: 950,
        descripcion: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto magni quaerat nisi quisquam? Error, earum aspernatur tenetur sint cum in quibusdam eos quae velit ratione maxime! Error`,
        imagen:"https://cdn.pixabay.com/photo/2016/03/05/22/55/barbeque-1239407_1280.jpg",
        stock:8
    },
    {
        id:2,
        nombre:"Hamburguesa Triple",
        precio: 900,
        descripcion: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto magni quaerat nisi quisquam? Error, earum aspernatur tenetur sint cum in quibusdam eos quae velit ratione maxime! Error`,
        imagen:"https://cdn.pixabay.com/photo/2022/05/25/21/28/burger-7221436_1280.jpg",
        stock:10
    },
    {
        id:3,
        nombre:"Hamburguesa UltraCheddar",
        precio: 850,
        descripcion: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto magni quaerat nisi quisquam? Error, earum aspernatur tenetur sint cum in quibusdam eos quae velit ratione maxime! Error`,
        imagen:"https://cdn.pixabay.com/photo/2017/11/12/21/11/hamburger-2943825_1280.jpg",
        stock:5
    }
];

const producto = {
    id:1,
    nombre:"Hamburguesa Bomber",
    precio: 950,
    descripcion: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto magni quaerat nisi quisquam? Error, earum aspernatur tenetur sint cum in quibusdam eos quae velit ratione maxime! Error`,
    imagen:"https://cdn.pixabay.com/photo/2016/03/05/22/55/barbeque-1239407_1280.jpg",
    stock:8
}

export const traerProductos = ()=>{
    return new Promise((resolve,eject)=>{
        setTimeout(() =>{
            resolve(productos);
        },2000)
    })
}

export const traerProducto = () => {
    return new Promise((resolve, eject) => {
        setTimeout(() => {
            resolve(producto);
        },2000)
    })
}