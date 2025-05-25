import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData, selectMostRecent } from "../redux/dataSlice";
import ResourceItem from "./ResourceItem";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function ResourceList ({ data, tags, loading, error }) {
  const dispatch = useDispatch();
  const latest = useSelector(selectMostRecent);

  // Fetch data when the component mounts
  // and when the dispatch function changes
  // This is a common pattern in React to ensure that the data is fetched
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading)
    return (
      <div className="p-4">
        <p className="p-4">Connecting to the server. Please wait.</p>
      </div>
    );

  if (error) {
    console.log(`Error loading resources:`, error);
    return (
      <div className="p-4">
        <p>Unable to load resources. Please try again later.</p>
      </div>
    );
  }

  return (
    <section className="p-4">
      {/* Mobile: show all items as a list */}
      <div className="block md:hidden space-y-4">
        {data.map((resource) => (
          <ResourceItem
            key={resource.id}
            resource={resource}
            tags={tags}
            className="w-full max-w-sm mx-auto"
          />
        ))}
      </div>

      {/* Desktop/Tablet: vertical swiper */}
      <Swiper
        modules={[Pagination]}
        spaceBetween={16}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          0: {
            enabled: false,
          },
          768: {
            slidesPerView: 2,
            pagination: false,
          },
          1024: {
            slidesPerView: 3,
            pagination: false,
          },
        }}
        className="h-full"
      >
        {data.map((resource) => (
          <SwiperSlide>
            <div className="flex justify-center items-start h-full">
              <ResourceItem
                key={`${resource.id}-${resource.name}`}
                resource={resource}
                tags={tags}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
