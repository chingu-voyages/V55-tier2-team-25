"use client";

import React, { useEffect, useState } from 'react';

export default function LatestSection() {
  const [latest, setLatest] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://seshatbe.up.railway.app/resources')
      .then(response => response.json())
      .then(json => {
        const sorted = json.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        const mostRecent = sorted[0];
        setLatest(mostRecent);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return (
    <div>
      <header className="p-4 border-2">
        <h2 className="text-2xl font-bold">🕒 Latest</h2>
      </header>
      <p className='p-4'>Loading...</p>;
    </div>
  )

  return (
    <div>
      <header className="text-black p-4 border-black border-2">
        <h2 className="text-2xl font-bold">🕒 Latest</h2>
      </header>
      <article className='p-4'>
        <h3 className="text-xl font-semibold">{latest.name}</h3>
        <p className="text-sm">Recommended by: {latest.author}</p>
        <p className="text-xs">
          Published: {new Date(latest.createdAt).toLocaleString()}
        </p>
        <a
          href={latest.url}
          className="underline mt-2 inline-block"
          target="_blank"
          title="view {latest.name} in a new tab"
          rel="noopener noreferrer"
        >
          View Resource →
        </a>
      </article>
    </div>
  );
}