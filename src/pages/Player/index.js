import Banner from 'components/Banner';
import styles from './Player.module.css';
import Titulo from 'components/Titulo';
import { useParams } from 'react-router-dom';
import NaoEncontrada from 'pages/NaoEncontrada';
import { useEffect, useState } from 'react';

function Player(){
    const [video, setVideo] = useState([]);
    const parametros = useParams();

    useEffect(() => {
        if (parametros.id) { //Consumindo API com FETCH para rodar os videos
            fetch(`https://my-json-server.typicode.com/barbaram02/cinetag-api/videos?id=${parametros.id}`)
                .then(resposta => resposta.json())
                .then(dados => {
                    setVideo(...dados);
                });
        }
    }, [parametros.id]);

    if (!video){
        return <NaoEncontrada/>; 
    }

    return (
        <>
        <Banner imagem="player"/>
        <Titulo>
            <h1>Player</h1>
        </Titulo>
        <section className={styles.container}>
        <iframe 
            width="100%" 
            height="100%" 
            src={video.link}
            title={video.Titulo}
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"     referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen>
        </iframe>
        </section>
        </>
    )
}
export default Player;