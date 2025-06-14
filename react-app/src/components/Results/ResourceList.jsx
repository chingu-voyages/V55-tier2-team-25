import React from "react";
import { useSelector } from "react-redux";
import { selectIsMobile } from "@/redux/dataSlice";
import ResourceItem from "./ResourceItem";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function ResourceList({ title, data, tags, loading, error }) {
  const isMobile = useSelector(selectIsMobile); //Switching to gloabl screen size listener

  if (loading || !data || data.length === 0) return null;

  return (
    <section className="p-4 self-center">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {/* Mobile: show all items as a list; larger screen view with Swiper */}
      {isMobile ? (
        <div className="flex flex-col items-center md:hidden space-y-4">
          {data.map((resource) => (
            <ResourceItem
              key={resource.id}
              resource={resource}
              tags={tags}
              className="w-full max-w-sm mx-auto"
            />
          ))}
        </div>
      ) : (
        <Swiper
          modules={[Pagination]}
          spaceBetween={16}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              pagination: { clickable: true },
            },
            1024: {
              slidesPerView: 3,
              pagination: { clickable: true },
            },
          }}
          className="h-full self-center my-swiper relative"
        >
          {data.map((resource) => (
            <SwiperSlide>
              <div className="flex justify-center items-start h-full self-center">
                <ResourceItem
                  key={`${resource.id}-${resource.name}`}
                  resource={resource}
                  tags={tags}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
}
