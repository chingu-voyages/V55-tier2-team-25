//This is the main page of the application
"use client";
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import store from "./store";
import { Provider } from "react-redux";
import MainContainer from "@/components/MainContainer";
import "./globals.css";

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
      <Header className="md:flex" />
      <main>
        <MainContainer
          onOpenFilter={openFilterMenu}
          isFilterOpen={isFilterOpen}
          onCloseFilter={closeFilterMenu}
        />
      </main>

      <Footer />
    </Provider>
  );
}
