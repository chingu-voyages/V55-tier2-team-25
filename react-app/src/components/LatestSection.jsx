import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchData,
  selectMostRecent,
  selectLoading,
  selectError,
  selectTags,
} from "../redux/dataSlice";
import ResourceList from "./ResourceList";

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

  return (
    <section className="p-4">
      <h2 className="text-2xl font-bold mb-4">Newly Picked</h2>
      <ResourceList data={latest} tags={tags} loading={loading} error={error} />
    </section>
  );
}
