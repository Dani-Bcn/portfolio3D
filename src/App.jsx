import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Ct_canvas from "./components3d/Ct_canvas";
import Contact from "./components/Contact";
import { Route, Routes, useLocation } from "react-router-dom";
import { Card3d } from "./components3d/Card3d";
import { AnimatePresence } from "framer-motion";
import About from "./components/About";

function App() {

  const location = useLocation();
  return (
    <main
      className="
        flex
        items-center
        justify-center
        w-screen
        h-screen
      "
    >
       <Navbar/>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
        <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home/>}/> 
          <Route path="/3d" element={<Ct_canvas />} />
        </Routes>
      </AnimatePresence>
    </main>
  );
}

export default App;
