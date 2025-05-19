import React, { useEffect } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function ResourceItem({ resource, tags }) {
  if (!resource) return null;

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
    <article
      key={`${resource.id} - ${resource.name}`}
      className="flex flex-col h-full max-w-sm rounded overflow-hidden shadow-sm shadow-gray-300 p-5"
    >
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
      <section className="mt-auto">
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
      </section>
    </article>
  );
}
