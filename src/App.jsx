import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <main
      className="
    absolute
    w-screen
    h-screen
    flex      
    flex-col
    justify-start
    items-center
  "
    >
      <section
        className="
          fixed
          flex
          m-3
          justify-end
          w-[95%]
          h-[75px]      
        "
      >
        <button
          className="              
          h-2/3
          w-24
          m-2
          bg-gradient-to-t to-blue-300 from-blue-200
          rounded-[100px]
        "
        >
          Contact
        </button>
        <button
          className="
          m-2
          h-2/3
          w-16
          rounded-[40%]
          bg-gradient-to-t to-blue-300 from-blue-200
        "
        ></button>
      </section>
      <section
        className="
        absolute
        mt-56
        w-[80%]
        flex
        flex-col
        justify-center
        items-center
        bg-slate-400/[0.3]   
        "
      >
        <article>
          <h1
            className="
          font-sans
          text-9xl          
        "
          >
            Dani Pérez
          </h1>
        </article>
        <article
          className="
          mt-20
          w-[90%]
        "
        >
          <h2>Welcome</h2>
          <h4
            className="
              text-[1.2rem]
            "
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
            iusto obcaecati odit quibusdam numquam repellendus, veritatis
            ratione deserunt cupiditate deleniti omnis fugit, sunt hic
            laudantium possimus, facilis ducimus libero voluptatem.
          </h4>
        </article>
        <article
          className="
            text-5xl
          "
        >
          <h3
            className="
            mt-32
            "
          >Portfolio</h3>
        </article>
      </section>
    </main>
  );
}

export default App;
