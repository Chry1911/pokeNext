"use client";

import React from 'react';
import Layout from '@/components/custom/layout';

export default function HomeDashboard() {
  return (
    <Layout>
      <div className="container mx-auto py-10">
        <h1>Welcome to the Dashboard!</h1>
        <p>This is the main dashboard content.</p>
      </div>
    </Layout>
  );
}