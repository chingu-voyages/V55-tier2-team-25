//This is the main page of the application
"use client";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import store from "./store";
import { Provider } from "react-redux";
import MainContainer from "@/components/MainContainer";
import { useDispatch } from "react-redux";
import { setIsMobile } from "@/redux/dataSlice";
import "./globals.css";

export default function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

function AppContent() {
  // Mobile screen size listener
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      dispatch(setIsMobile(window.innerWidth < 768));
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch]);

  // Menu listener
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
