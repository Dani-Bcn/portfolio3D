import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/all";
import Home from "./components/Home";
function App() {
  const location = useLocation();
  gsap.registerPlugin(ScrollTrigger);

  return (
    <main>
        <Home/>
    </main>
  );
}

export default App;
