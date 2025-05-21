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
      className="w-full flex flex-col h-full max-w-sm overflow-hidden shadow-sm shadow-gray-300 p-6 pt-4 rounded-4xl m-2"
    >
      <a
        href={resource.url}
        className="mt-2 inline-block"
        target="_blank"
        title={`View latest resource — titled "${resource.name}" — in a new tab.`}
        rel="noopener noreferrer"
      >
        <section className="h-full">
          <h3 className="text-xl font-semibold">
            {resource.name}
          </h3>

          <div className="pt-4 pb-2">
            {tagNames.length > 0 ? (
              tagNames.map((tag) => (
                <span
                  key={`${resource.id}- ${tag}`}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 p-6"
                >
                  {tag}
                </span>
              ))
            ) : (
              <span className="text-sm text-gray-400 p-6">No tags</span>
            )}
          </div>
        </section>
        <section className="border-t h-15">
          <p className="text-sm p-5 pl-0 pb-1 pt-4 font-semibold">
            {resource.author}
          </p>
          <p className="text-xs">
            {" "}
            {new Date(resource.createdAt).toLocaleString("en-US", {
              year: "numeric",
              month: "numeric",
              day: "numeric",
            })}
          </p>
        </section>
      </a>
    </article>
  );
}
