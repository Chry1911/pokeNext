"use client"

import Layout from '@/components/custom/layout';
import { useState, useEffect } from 'react';
import { createDeck } from './actions';
import { columns } from './columns';
import { DataTable } from './data-table';
import { Deck } from '@/lib/types';

export default function HomeDashboard() {
  const [deckName, setDeckName] = useState('');
  const [deck, setDeck] = useState<Deck | null>(null);


  useEffect(() => {
    // Check if a deck already exists in local storage
    const savedDeck = localStorage.getItem('deck');
    if (savedDeck) {
      setDeck(JSON.parse(savedDeck));
    }
  }, []);

  const handleCreateDeck = async () => {
    if (deck) {
      alert('You can only create one deck.');
      return;
    }

    if (deckName.trim().length >= 3) {
      try {
        const newDeck = await createDeck(deckName.trim());
        setDeck(newDeck);
        localStorage.setItem('deck', JSON.stringify(newDeck));
      } catch (error) {
        console.error('Error creating deck:', error);
      }
    } else {
      alert('Please enter at least 3 characters to create a deck.');
    }
  };

  return (
    <Layout>
      <div className="container mx-auto py-10">
        <div className="mb-4">
          <input
            type="text"
            value={deckName}
            onChange={(e) => setDeckName(e.target.value)}
            placeholder="Deck name"
            className="border border-gray-300 rounded px-3 py-1"
          />
          <button
            onClick={handleCreateDeck}
            className="ml-2 bg-blue-500 text-white px-3 py-1 rounded"
          >
            Create Deck
          </button>
        </div>

        {deck && (
          <div className="mb-4">
            <DataTable columns={columns} data={[deck]} />
          </div>
        )}
      </div>
    </Layout>
  );
}
