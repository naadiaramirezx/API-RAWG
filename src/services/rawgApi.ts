const API_KEY = "2c257019a68842a2a96ee8d622b2ac8b"
const BASE_URL = 'https://api.rawg.io/api'
import { GameDetails, RawgGame } from '../interfaces/game';



export const getGames = async (): Promise<RawgGame[]> => {
    const response = await fetch (
        // consulta de videojuegos
         `${BASE_URL}/games?key=${API_KEY}&page_size=40`
    )

    if (!response.ok) {
    throw new Error('Error al obtener los juegos')
}

//convierte respuesta a json
const data: { results: RawgGame[] } = await response.json();

return data.results;
}

//OBTENER CATEGORIAS
export const getGenres = async () => {
    const response = await fetch (
        // consulta de videojuegos
         `${BASE_URL}/genres?key=${API_KEY}`
    );

    if (!response.ok) {
        throw new Error('Error al obtener los generos')
    }

    //convierte respuesta a json
    const data = await response.json();
    return data.results;
}

//OBTENER  JUEGOS POR CATEGORIA
export const getGamesByGenres = async (genre: string): Promise<RawgGame[]> => {

    const response = await fetch (
         `${BASE_URL}/games?key=${API_KEY}&genres=${encodeURIComponent(genre)}&page_size=40` 
         //encodeURI es para evitar problemas con caracteres especiales
    )

    if (!response.ok) {
        throw new Error('Error al obtener los juegos')
    }
    const data = await response.json();

    return data.results;
}

//DETALLES DEL JUEGO
export const getGameDetails = async (id: number): Promise<GameDetails> => {
    const response = await fetch(`${BASE_URL}/games/${id}?key=${API_KEY}`);

    if (!response.ok) {
        throw new Error('Error al obtener los detalles del juego');
    }

    return response.json();
};


//JUEGOS POPULARES


