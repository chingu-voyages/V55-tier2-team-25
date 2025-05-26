import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, selectTags, selectError, selectLoading } from "@/redux/dataSlice";
import { FiFilter } from "react-icons/fi";

export default function Filter({ formFieldName }) {
  const dispatch = useDispatch();
  const tags = useSelector(selectTags);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);

  console.log(tags);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

    if (loading)
    return (
      <div className="p-4">
        <p className="p-4">Loading filters</p>
      </div>
    );

  if (error) {
    console.log(`Error loading resources:`, error);
    return (
      <div className="p-4">
        <p>Unable to load filters. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="relative">
      <input type="checkbox" className="hidden peer" id="filter-toggle" />

      {/* Label tied to checkbox via htmlFor - makes this clickable */}
      <label
        htmlFor="filter-toggle"
        className="cursor-pointer flex items-center select-none"
      >
        <FiFilter className="text-3xl" />
      </label>

      <div className="absolute bg-white border border-gray-200 mt-1 p-2 transition-opacity opacity-0 pointer-events-none peer-checked:opacity-100 peer-checked:pointer-events-auto z-10 max-h-64 overflow-auto min-w-[150px]">
        {/* Dropdown content */}
        <ul>
          {tags.map((tag) => (
            <li key={tag.id}>
              <label className="flex whitespace-nowrap cursor-pointer px-2 py-1 transition-colors hover:bg-blue-100 [&:has(input:checked)]:bg-blue-200">
                <input
                  type="checkbox"
                  name={formFieldName}
                  value={tag.tag}
                  className="peer hidden"
                />
                <span className="inline-block px-3 py-1 rounded-full border border-blue-500 text-blue-500 peer-checked:bg-blue-500 peer-checked:text-white transition-all hover:bg-blue-100">
                  {tag.tag}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
