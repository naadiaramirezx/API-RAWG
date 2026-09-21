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
  background_image: string;
  rating: number;
  released: string;
}