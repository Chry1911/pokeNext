"use server"

import { PokemonType } from "@/lib/types";

interface Deck {
    id: string; 
    name: string;
    cards: PokemonType[]; 
}

export async function createDeck(name: string): Promise<Deck> {
    try {
        
        const deck: Deck = {
            id: Math.random().toString(36).substr(2, 9),
            name: name,
            cards: []
        };
        return deck;

    } catch (error) {
        console.error('Error creating deck:', error);
        throw error;
    }
}


export async function addCardToDeck(deck: Deck, card: PokemonType): Promise<Deck> {
    try {
        
        deck.cards.push(card);
        return deck;

    } catch (error) {
        console.error('Error adding card to deck:', error);
        throw error;
    }
}