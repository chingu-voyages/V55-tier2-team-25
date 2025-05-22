//This is the main page of the application
'use client';
import React from "react";
import Header from "../components/Header";
import ClearButton from "../components/ClearButton";
import Footer from "../components/Footer";
import RecommendSection from "../components/RecommendSection";
import LatestSection from "../components/LatestSection";
import store from "./store";
import { Provider } from "react-redux";
import SearchContainer from "@/components/SearchContainer";

export default function App() {
  return (
    <div>
      <Provider store={store}>
      <Header className="md:flex" />
      <SearchContainer />
      <ClearButton />
  

      {/*<RecommendSection />*/}
      <LatestSection />
      {/* Add more sections as needed */}
      <Footer />
      </Provider>
    </div>
  );
}
