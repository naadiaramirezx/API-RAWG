import { RawgGame } from '../interfaces/game';

const favorites = new Map<number, RawgGame>();

export const isFavorite = (id: number) => favorites.has(id);

export const toggleFavorite = (game: RawgGame) => {
    if (favorites.has(game.id)) {
        favorites.delete(game.id);
    } else {
        favorites.set(game.id, game);
    }

    return favorites.has(game.id);
};

export const getFavorites = () => Array.from(favorites.values());