"use client"

import { useState } from 'react';
import Layout from '@/components/custom/layout';
import { DataTable } from './data-table';
import { columns, PokemonType } from './columns';
import { searchPokemon, Pokemon } from './actions';


export default function DemoPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<PokemonType[]>([]);

  const handleSearch = async () => {
    console.log("Try to search for:", searchQuery)
    if (searchQuery.trim().length >= 3) {
      const results = await searchPokemon(searchQuery.trim());
      setSearchResults(results);
    } else {
      alert("Please enter at least 3 characters to search")
    }
  };

  return (
    <Layout>
      <div className="container mx-auto py-10">
        
        <div className="mb-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Pokémon"
            className="border border-gray-300 rounded px-3 py-1"
          />
          <button
            onClick={handleSearch}
            className="ml-2 bg-blue-500 text-white px-3 py-1 rounded"
          >
            Search
          </button>
        </div>
        
        {searchResults.length > 0 ? (
          <DataTable columns={columns} data={searchResults} />
        ) : (
          <p>No search results</p>
        )}
      </div>
    </Layout>
  );
}
