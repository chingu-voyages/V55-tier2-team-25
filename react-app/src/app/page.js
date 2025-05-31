//This is the main page of the application
'use client';
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LatestSection from "../components/LatestSection";
import store from "./store";
import { Provider } from "react-redux";
import SearchContainer from "@/components/SearchContainer";
import './globals.css';
import Filter from "@/components/Filter";


export default function App() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const openFilterMenu = () => {
    setIsFilterOpen(true);
  };
  const closeFilterMenu = () => {
    setIsFilterOpen(false);
  };


  return (
      <Provider store={store}>
     <div className={isFilterOpen ? "blurred-background" : ""}>
      <Header className="md:flex" />
      <SearchContainer 
      onOpenFilter={openFilterMenu} 
      isFilterOpen={isFilterOpen} 
      onCloseFilter={closeFilterMenu} 
  />
 {/* <div className={isFilterOpen ? "blurred-background" : ""}> */}
        <LatestSection />
   
</div>
      <Footer />
 
 {/* Filter and Backdrop outside the grayed-out wrapper */}
      {isFilterOpen && (
      <></>
      )}
      </Provider>
 
  );
}
