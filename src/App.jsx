import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/all";

function App() {
  const location = useLocation();
  gsap.registerPlugin(ScrollTrigger);

  return (
    <main
      className="   
      flex
      flex-col
       
      
        bg-slate-100
      "
    >
      <div
        className="
        absolute
        w-screen
        h-screen
        bg-gradient-to-t to-orange-200 from-orange-50/[0.5]"
      ></div>
      <header
        className="    
      fixed    
        flex
        w-[90%]
        m-5
        items-center
        justify-between
        z-50
      "
      >
        <img
          src="../Public/assests/img/Logo-Dani.svg"
          alt="image-logo"
          width={50}
        />
        <button
          className="
          w-20
          h-12
          bg-green-500
          rounded-[25px]
          text-2xl
          text-blue-200
          font-bold
        "
        >
          Coco
        </button>
      </header>
      <section
        className="
        flex
        flex-col
        mt-72
        items-center
        justify-between
          w-[90%]
          m-auto
          z-10
        "
      >
        <h1
          className="
          w-full
          h-[120px]
          text-8xl
        "
        >
          Dani
        </h1>
        <h1
          className="
        w-full
        text-end
        h-[120px]
        text-8xl
      "
        >
          Pérez
        </h1>
      </section>
      <section
        className="
          flex
          flex-col
          items-center
          justify-center
          w-[80%]
          m-10
          h-[600px]
          bg-gradient-to-t to-emerald-300/[0.5] from-emerald-50/[0.1]
          rounded-tl-[150px]
          rounded-tr-[150px]
          z-10
        "
      >
        <h2
          className="
            text-5xl
            mt-32
            h-24
          "
        >
          About me
        </h2>
        <p
          className="
            w-full    
            h-80       
            text-2xl
            px-4
            ml-10
          "
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
          tempora? Voluptas et quae fugit, veritatis molestiae error
          praesentium.
        </p>
      </section>
      <section
        className="
        flex
        flex-col
        items-center
        justify-center
        w-[80%]
        m-10
        h-[600px]
        bg-gradient-to-t to-emerald-300/[0.5] from-emerald-50/[0.1]
        rounded-tl-[150px]
        rounded-tr-[150px]
        z-10
      "
      >
        <h2
           className="
           text-5xl
           mt-32
           h-24
         "
        >
          Skills
        </h2>

        <h3>Html</h3>
      </section>

      <h2
        className="
              h-20
              text-5xl
            "
      >
        Projects
      </h2>
    </main>
  );
}

export default App;
