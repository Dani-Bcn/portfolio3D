import "./App.css";
import { useState } from "react";
import MainHome from "./MainHome";
import Responsive from "./Responsive";

function App() {

  const [activeResponsive, setActiveResponsive] = useState();

  const responsive = (e) => {
    e === "portrait-primary"
      ? setActiveResponsive(true) : setActiveResponsive(false);      
  };

  return (
    <main>
      <MainHome activeResponsive={activeResponsive}/>
      <Responsive responsive={responsive}/>
    </main>
  );
}

export default App;
