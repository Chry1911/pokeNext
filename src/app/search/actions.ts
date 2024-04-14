"use server"

import axios from 'axios';

export interface Pokemon {
    name: string;
    base_experience: number | null;
    abilities: { name: string }[];
    types: { name: string }[];
    sprites: { front_default: string | null, front_shiny: string | null };
}

let cachedPokemon: Pokemon[] = []; 


export async function searchPokemon(query: string): Promise<Pokemon[]> {
    try {
        const lowerCaseQuery = query.toLowerCase();
        
        const cachedIndex = cachedPokemon.findIndex(pokemon => pokemon.name === lowerCaseQuery);
        if (cachedIndex !== -1) {
            return [cachedPokemon[cachedIndex]]; 
        }

        
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${lowerCaseQuery}`);
        const pokemonData = response.data;

        
        const sprites = {
            front_default: pokemonData.sprites.front_default,
            front_shiny: pokemonData.sprites.front_shiny
        };

        
        const pokemon: Pokemon = {
            name: pokemonData.name,
            base_experience: pokemonData.base_experience,
            abilities: pokemonData.abilities.map((ability: any) => ({ name: ability.ability.name })),
            types: pokemonData.types.map((type: any) => ({ name: type.type.name })),
            sprites: sprites
        };

        
        if (cachedIndex === -1) {
            cachedPokemon.push(pokemon);
        }

        
        return cachedPokemon;
    } catch (error) {
        
        console.error('Error fetching Pokémon data:', error);
        throw error;
    }
}
