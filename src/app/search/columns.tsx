"use client"
import { ColumnDef } from "@tanstack/react-table"
import { Deck } from "@/lib/types";

export type PokemonType = {
    name: string;
    base_experience: number | null;
    abilities: { name: string }[];
    types: { name: string }[];
    sprites: { front_default: string | null, front_shiny: string | null };
}

export const columns: ColumnDef<PokemonType>[] = [
  {
    accessorKey: "sprites",
    header: "Image",
    cell: ({ row }) => (
      <div>
        {row.original.sprites.front_default && (
          <img src={row.original.sprites.front_default} alt={row.original.name} />
        )}
      </div>
    ),
  },
  {
    accessorKey: "abilities",
    header: "Abilities",
    cell: ({ row }) => (
      <div>
        {row.original.abilities.map((ability, index) => (
          <div key={index}>{ability.name}</div>
        ))}
      </div>
    ),
  },
  {
    accessorKey: "types",
    header: "Types",
    cell: ({ row }) => (
      <div>
        {row.original.types.map((type, index) => (
          <div key={index}>{type.name}</div>
        ))}
      </div>
    ),
  },
  {
    accessorKey: "base_experience",
    header: "Base Experience",
  },
  {
    id: "action",
    header: "Action",
    cell: ({ row }) => (
      <button
        onClick={() => {
          // Add the Pokémon to the deck of cards
          addPokemonToDeck(row.original);
        }}
      >
        Add to Deck
      </button>
    ),
  },
]


// Function to add a Pokémon to the deck of cards
async function addPokemonToDeck(pokemon: PokemonType) {
  try {
      let deck = getDeckFromLocalStorage();
      if (!deck) {
          alert('Please create a deck before adding cards.');
          return;
      }

      // Check if the deck already contains the same Pokémon
      const isDuplicate = deck.cards.some((card) => card.name === pokemon.name);
      if (isDuplicate) {
          alert('This Pokémon is already in the deck.');
          return;
      }

      // Check if the deck is full
      if (deck.cards.length >= 10) {
          // If the deck is full, remove the first card
          deck.cards.shift();
      }

      // Add the new Pokemon to the deck
      deck.cards.push(pokemon);

      // Save the updated deck to local storage
      saveDeckToLocalStorage(deck);

      alert('Card added to deck successfully.');
  } catch (error) {
      console.error('Error adding card to deck:', error);
      // Handle error
  }
}

// Function to get the deck from local storage
function getDeckFromLocalStorage(): Deck | null {
    const savedDeck = localStorage.getItem('deck');
    return savedDeck ? JSON.parse(savedDeck) : null;
}

// Function to save the deck to local storage
function saveDeckToLocalStorage(deck: Deck) {
    localStorage.setItem('deck', JSON.stringify(deck));
}