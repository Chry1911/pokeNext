"use client";

import React from 'react';
import Layout from '@/components/custom/layout';

export default function HomeDashboard() {
  return (
    <Layout>
      <div className="container mx-auto py-10">
        <h1>Welcome to the Chry1911 Pokemon Deck!</h1>
        <p>Here you can create your deck with 10 cards</p>
      </div>
    </Layout>
  );
}