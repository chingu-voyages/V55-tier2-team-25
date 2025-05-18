import React from "react";

export default function RecommendedSection() {
  return (
    <div>
      <header className="text-black p-4">
        <h2 className="text-2xl font-bold">🎯 Recommend</h2>

        <div className="max-w-sm rounded overflow-hidden shadow-sm shadow-gray-300">
          <img
            className="h-48 w-full object-cover"
            src="https://picsum.photos/200/300"
            alt="Randomly generated photo placeholder"
          />
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #tag placeholder
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #tag placeholder
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #tag placeholder
            </span>
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Title placeholder</div>
            <p className="text-stone-500 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
            <p className="text-gray-600">Date posted placeholder</p>
          </div>
        </div>
      </header>
    </div>
  );
}