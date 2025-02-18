import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext();
FavoritosContext.displayName = "Favoritos";

export default function FavoritosProvider({ children }) {
    const [favorito, setFavorito] = useState([]);

    return(
        <FavoritosContext.Provider
            value={{favorito, setFavorito}}>
            {children}
        </FavoritosContext.Provider>
    )
}

export function useFavoritoContext(){
    const {favorito, setFavorito} = useContext(FavoritosContext);

    function adicionarFavorito(novoFavorito){
        const favoritoRepetido = favorito.some(item => item.id === novoFavorito.id) //Caso tenha algum item com o mesmo id, ele retorna TRUE

        let novaLista = [...favorito];

        if (!favoritoRepetido){ //Se não existir repetido
            novaLista.push(novoFavorito);
            return setFavorito(novaLista);
        }

        const itemIndex = novaLista.findIndex(item => item.id === novoFavorito.id);
        if(itemIndex !== -1){ // (X !== -1) significa que x existe. Mas, (X == -1) signiifca que x não existe.
            novaLista.splice(itemIndex, 1);
            return setFavorito(novaLista);
        }

        // novaLista.splice(
        //     novaLista.findIndex(
        //       item => item.id === novaLista.find(item => item.id === novoFavorito.id).id), 1) //o SPLICE remove o item da lista, que foi encontrado na posição com o IndexOf
        //       return setFavorito(novaLista);
    }

    return {
        favorito,
        adicionarFavorito
    }
}