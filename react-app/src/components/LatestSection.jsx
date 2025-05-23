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
  const error = useSelector(selectError);
  const tags = useSelector(selectTags);

  // Fetch data when the component mounts
  // and when the dispatch function changes
  // This is a common pattern in React to ensure that the data is fetched
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">🕒 Latest</h2>
      <ResourceList data={latest} tags={tags} loading={loading} error={error} />
    </section>
  );
}
