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
    <section className="p-4 min-h-[400px]">
      <Swiper
        modules={[Pagination]}
        spaceBetween={16}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            pagination: false,
          },
          1024: {
            slidesPerView: 3,
            pagination: false,
          },
        }}
        // className="md:grid md:grid-cols-5 md:gap-5 h-full"
        className="h-full"
      >
        {data.map((resource) => (
          <SwiperSlide>
            {/* <div className="flex flex-col h-full"> */}
            <div className="h-full">
              <ResourceItem
                key={`${resource.id}-${resource.name}`}
                resource={resource}
                tags={tags}
                className="h-100 self-center"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
