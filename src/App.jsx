import "./App.css";
import { useEffect, useState } from "react";
import MainHome from "./MainHome";
import Responsive from "./Responsive";

function App() {
  const [activeResponsive, setActiveResponsive] = useState();
  useEffect(() => {
    screen.orientation.type === "portrait-primary"
      ? setActiveResponsive(true)
      : setActiveResponsive(false);
  }, []);

  const responsive = (e) => {
    e === "portrait-primary"
      ? setActiveResponsive(true)
      : setActiveResponsive(false);
  };

  return (
    <main>
      <MainHome activeResponsive={activeResponsive} />
      <Responsive responsive={responsive} />
    </main>
  );
}

export default App;
