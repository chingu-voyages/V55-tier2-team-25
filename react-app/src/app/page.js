//This is the main page of the application
import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Search from "../components/SearchButton";
import ClearButton from "../components/ClearButton";
import Footer from "../components/Footer";
import RecommendSection from "../components/RecommendSection";
import LatestSection from "../components/LatestSection";


export default function Home() {
  return (
    <div>
      <Header className="md:flex" />
      <SearchBar />
      <ClearButton />
      <Search />
      <RecommendSection />
      <LatestSection />
      {/* Add more sections as needed */}
      <Footer />
    </div>
  );
}
