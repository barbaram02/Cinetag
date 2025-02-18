import Banner from "components/Banner";
import Card from "components/Card";
import Titulo from "components/Titulo";
import styles from './Inicio.module.css'
import { useEffect, useState } from "react";

function Inicio(){
    const [videos, setvideos] = useState([]);

    useEffect(() => {   //Estudar sobre essa parte
        fetch('https://my-json-server.typicode.com/barbaram02/cinetag-api/videos')
        .then(resposta => resposta.json())
        .then(dados => {
            setvideos(dados)
        })
    }, [])

    return(
        <>
        <Banner imagem="home"/>
        <Titulo>
            <h1>Um lugar para guardar seus vídeos e filmes!</h1>
        </Titulo>
        {/* <Card id='1' titulo='Pânico 5' capa='https://cdn.cineart.com.br/vibezz_93856127.jpg'/> */}
        <section className={styles.container}>
            {videos.map((video) =>  {
                return <Card {...video} key={video.id}/>
            })}
        </section>
        </>
    );
}

export default Inicio;