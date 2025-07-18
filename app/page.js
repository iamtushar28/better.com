"use client";
import { Provider } from "react-redux";
import { store } from "./reduxStore";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Stories from "./components/Stories";
import QueriesSection from "./components/QueriesSection";

export default function Home() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Sidebar />
        <Hero />
        <Stories />
        {/* <QueriesSection/> */}
      </Provider>
    </>
  );
}
