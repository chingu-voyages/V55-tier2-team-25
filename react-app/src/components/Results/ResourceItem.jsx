//Card component for displaying a resource item
// This component is used in the SearchResults and LatestSection components

import React from "react";

export default function ResourceItem({ resource, tags }) {
  if (!resource) return null;

  const appliedTags = Array.isArray(resource.appliedTags)
    ? resource.appliedTags
    : [];
//this code maps over appliedTags and finds the corresponding tag id from the tags array
const tagNames =
Array.isArray(tags) && Array.isArray(appliedTags)
? appliedTags.map((tagId) => {
        const tag = tags.find((t) => t.id === tagId);
      return tag?.tag; // Return the tag name if found
    })
    .filter(Boolean) // Filter out any undefined or null tag names
  : [];
  return (
    <article
      key={`${resource.id} - ${resource.name}`}
      className="w-full max-w-sm self-center h-60 shadow-sm shadow-gray-300 p-6 pt-4 rounded-4xl m-2 mb-10"
    >
      <a
        href={resource.url}
        className="mt-2 block w-full"
        target="_blank"
        title={`View "${resource.name}" in a new tab.`}
        rel="noopener noreferrer"
      >
        <section className="h-35">

          <div className="line-clamp-1">
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

          <h3 className="text-xl font-semibold line-clamp-3">
            {resource.name}
          </h3>

        </section>
        <section className="h-15 w-full border-t flex justify-between items-center">
          <p className="text-sm p-5 pl-0 pb-1 pt-4">
            {resource.author}
          </p>
          <p className="text-sm pl-0 pb-1 pt-4">
            {(() => {
              const date = new Date(resource.createdAt);
              return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`}) ()}
          </p>
        </section>
      </a>
    </article>
  );
}
