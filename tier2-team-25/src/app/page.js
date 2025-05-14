//This is the main page of the application
import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Search from "../components/SearchButton";
import ClearButton from "../components/ClearButton";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <SearchBar />
      <ClearButton />
      <Search />
      <Footer />
    </div>
  );
}
