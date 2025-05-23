import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchData,
  selectMostRecent,
  selectLoading,
  selectError,
  selectTags,
} from "../redux/dataSlice";
import ResourceItem from "./ResourceItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function LatestSection() {
  const dispatch = useDispatch();
  const latest = useSelector(selectMostRecent);
  const loading = useSelector(selectLoading);
  const isLatestLoaded = useSelector((state) => state.data.isLatestLoaded);
  const error = useSelector(selectError);
  const tags = useSelector(selectTags);

  // Fetch data when the component mounts
  // and when the dispatch function changes
  // This is a common pattern in React to ensure that the data is fetched
  useEffect(() => {
    if(!isLatestLoaded) {
    dispatch(fetchData());
  }  
}, [dispatch, isLatestLoaded]);

  if (loading)
    return (
      <div className="p-4">
        <header>
          <h2 className="text-2xl font-bold">🕒 Latest</h2>
        </header>
        <p className="p-4">Loading...</p>
      </div>
    );

  if (error) {
    console.log(`Error loading resources:`, error);
    return (
      <div className="p-4">
        <header>
          <h2 className="text-2xl font-bold">🕒 Latest</h2>
        </header>
        <p>Unable to load resources. Please try again later.</p>
      </div>
    );
  }

  return (
    <section className="p-4 min-h-[400px]">
      <header>
        <h2 className="text-2xl font-bold">🕒 Latest</h2>
      </header>
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
          {latest.map((resource) => (
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
