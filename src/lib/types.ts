export type PokemonType = {
    name: string;
    base_experience: number | null;
    abilities: { name: string }[];
    types: { name: string }[];
    sprites: { front_default: string | null };
}

export type Deck = {
    id: string;
    name: string;
    cards: PokemonType[];
}