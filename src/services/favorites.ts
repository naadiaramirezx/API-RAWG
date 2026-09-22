import { RawgGame } from './game';

//guardar juegos seleccinados como favs
const favorites = new Map<number, RawgGame>();

//verificar que el juego este en favs
export const isFavorite = (id: number) => favorites.has(id);

//agregar o eliminar el juego
export const toggleFavorite = (game: RawgGame) => {
    if (favorites.has(game.id)) {
        favorites.delete(game.id);
    } else {
        favorites.set(game.id, game);
    }

    return favorites.has(game.id);
};

//obtiene todos los juegos favs
export const getFavorites = () => Array.from(favorites.values());