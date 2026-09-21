//para obtener los juegos
export interface RawgGame {
    id: number
    name: string
    background_image: string | null
}

//obtener categorias
export interface Genre {
  id: number;
  name: string;
  slug: string;
}

//detalles del juego
export interface GameDetails {
  id: number;
  name: string;
  slug: string;
  background_image: string | null;
  rating: number;
  released: string;
  genres: Array<{ id: number; name: string }>;
  developers: Array<{ id: number; name: string }>;
  platforms: Array<{ platform: { id: number; name: string } }>;
}