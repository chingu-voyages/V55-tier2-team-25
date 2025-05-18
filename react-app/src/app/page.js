//This is the main page of the application
'use client';
import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Search from "../components/SearchButton";
import ClearButton from "../components/ClearButton";
import SearchResults from "../components/SearchResults";
import Footer from "../components/Footer";
import RecommendSection from "../components/RecommendSection";
import LatestSection from "../components/LatestSection";
import store from "./store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <div>
      <Provider store={store}>
      <Header className="md:flex" />
      <SearchBar />
      <ClearButton />
      <Search />
      <SearchResults />
      <RecommendSection />
      <LatestSection />
      {/* Add more sections as needed */}
      <Footer />
      </Provider>
    </div>
  );
}
