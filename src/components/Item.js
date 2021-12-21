import React, {useState} from 'react';
import ItemList from './ItemList';
import ItemListContainer from '../paginas/ItemListContainer';


const Datos = ()=> {
    const [datos, setDatos] = useState([
        {
            id: 1,
            nombre: "Diseño Gráfico",
            aplicacion : "Redes sociales y página web",
            img: "/my-app/public/carrusel1.png",
            precio: "$5000"
        },
        {
            id: 2,
            nombre: "Reels",
            aplicacion: "Redes sociales",
            img: "/my-app/public/videotape-with-clapperboard.png",
            precio: "$7000"
        },
        {
            id: 3,
            nombre: "Marketing",
            aplicacion: "Apto para plataformas determinada",
            img: "/my-app/public/carrusel4.jpg",
            precio: "$15000"
        },
        {
            id: 4,
            nombre: "Podcast",
            aplicacion: "Redes socilaes y plataformas determinadas",
            img: "/my-app/public/podcast.jpg",
            precio: "$8000"
        }
    ]);
    
    return (
    <div className='roow'>
        {datos.map((datos) =>{
            return <ItemList key={datos.id} nombre={datos.nombre} img={datos.img} aplicacion={datos.aplicacion} preico={datos.aplicacion}/>
        })};
    </div>);
};
export default Datos

