"use client"
import { ColumnDef } from "@tanstack/react-table"

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
function addPokemonToDeck(pokemon: PokemonType) {
    // Implement your logic to add the Pokémon to the deck of cards
    console.log("Adding Pokémon to the deck:", pokemon);
  }
