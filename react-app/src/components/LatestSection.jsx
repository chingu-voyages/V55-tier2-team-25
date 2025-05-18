"use client";

import React, { useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import WebsitePreview from "./WebsitePreview";

export default function LatestSection() {
  const [latest, setLatest] = useState([]);
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //Fetches two API endpoints: resources and tags
    Promise.all([
      fetch("https://seshatbe.up.railway.app/resources").then((res) =>
        res.json()
      ),
      fetch("https://seshatbe.up.railway.app/tags").then((res) => res.json()),
    ])

      // Fetches the resources and tags from the API and removes duplicates
      .then(([resources, tagList]) => {
        //added console log to check the resources and tags
        console.log("Resources:", resources);
        console.log("Tags:", tagList);

        const uniqueResources = [
          ...new Map(resources.map((item) => [item.id, item])).values(),
        ];
        const sorted = [...uniqueResources].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );

        const mostRecent = sorted.slice(0, 5);
        //Added console log to check the most recent resources
        console.log("Most Recent Resources:", mostRecent);

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

  return (
    <section className="p-4">
      <header>
        <h2 className="text-2xl font-bold">🕒 Latest</h2>
      </header>

      {latest.map((resource) => {
        const appliedTags = Array.isArray(resource.appliedTags)
          ? resource.appliedTags
          : [];

        const tagNames = appliedTags
          .map((tagId) => {
            const tag = tags.find((t) => t.id === tagId);
            return tag?.tag; // Return the tag name if found
          })
          .filter(Boolean); // Filter out any undefined or null tag names

        return (
          <div 
           key={`${resource.id} - ${resource.name}`}
          className="flex flex-wrap gap-5 justify-start">
            <article
             
              className="flex-1 max-w-sm rounded overflow-hidden shadow-sm shadow-gray-300 p-5"
            >
  {/* <WebsitePreview url={resource.url} /> */}

              <h3 className="text-xl font-semibold">{resource.name}</h3>
              <div className="pt-4 pb-2">
                {tagNames.length > 0 ? (
                  tagNames.map((tag) => (
                    <span
                      key={`${resource.id}- ${tag}`}
                      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    >
                      #{tag}
                    </span>
                  ))
                ) : (
                  <span className="text-sm text-gray-400">No tags</span>
                )}
              </div>
              <p className="text-sm">Recommended by: {resource.author}</p>
              <p className="text-xs">
                Shared on:{" "}
                {new Date(resource.createdAt).toLocaleString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
              <a
                href={resource.url}
                className="underline mt-2 inline-block"
                target="_blank"
                title={`View latest resource — titled "${resource.name}" — in a new tab.`}
                rel="noopener noreferrer"
              >
                View Resource <FaExternalLinkAlt className="ml-1" />
              </a>
            </article>
          </div>
        );
      })}
    </section>
  );
}
