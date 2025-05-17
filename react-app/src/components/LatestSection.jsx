"use client";

import React, { useEffect, useState } from "react";

export default function LatestSection() {
  const [latest, setLatest] = useState(null);
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch("https://seshatbe.up.railway.app/resources").then((res) =>
        res.json()
      ),
      fetch("https://seshatbe.up.railway.app/tags").then((res) => res.json()),
    ])
      .then(([resources, tagList]) => {
        const sorted = resources.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        const mostRecent = sorted[0];
        setLatest(mostRecent);
        setTags(tagList);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="p-4">
        <header>
          <h2 className="text-2xl font-bold">🕒 Latest</h2>
        </header>
        <p className="p-4">Loading...</p>
      </div>
    );

  const tagNames = latest.appliedTags
    ?.map((tagId) => {
      const tag = tags.find((t) => t.id === tagId);
      return tag?.tag;
    })
    .filter(Boolean);

  return (
    <div className="p-4">
      <header>
        <h2 className="text-2xl font-bold">🕒 Latest</h2>
      </header>
      <article className="max-w-sm rounded overflow-hidden shadow-sm shadow-gray-300 p-5">
        <h3 className="text-xl font-semibold">{latest.name}</h3>
        <div className="pt-4 pb-2">
          {tagNames.length > 0 ? (
            tagNames.map((name) => (
              <span
                key={name}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                #{name}
              </span>
            ))
          ) : (
            <span className="text-sm text-gray-400">No tags</span>
          )}
        </div>
        <p className="text-sm">Recommended by: {latest.author}</p>
        <p className="text-xs">
          Shared on:{" "}
          {new Date(latest.createdAt).toLocaleString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
        <a
          href={latest.url}
          className="underline mt-2 inline-block"
          target="_blank"
          title={`View latest resource — titled "${latest.name}" — in a new tab.`}
          rel="noopener noreferrer"
        >
          View Resource →
        </a>
      </article>
    </div>
  );
}
