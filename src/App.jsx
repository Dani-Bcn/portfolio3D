import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/all";

function App() {
  const location = useLocation();
  gsap.registerPlugin(ScrollTrigger);

  const [handleOvered, setHandleOvered] = useState(false);

  useEffect(() => {
    gsap.to("#circleHtml", {
      scrollTrigger: {
        trigger: "#circleHtml",
        start: "top 600",
        markers: true,
        scrub: 1,
      },
      clipPath: "circle(45% at 50% 50%)",
      ease: "back.out(1.7)",
    });
  });

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
      <div
        className="
        absolute
        w-screen
        h-screen
        bg-gradient-to-t from-blue-200 to-blue-300
      "
      ></div>
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
        <h1
          className="
          font-sans
          h-[300px]
          text-9xl          
        "
        >
          Dani Pérez
        </h1>

        <article
          className="
          relative
          w-[90%]
          bg-slate-500
        "
        >
          {" "}
          <div
            id="circleHtml"
            className="
          absolute
          mt-20
          -ml-20
          w-52
          h-52
          bg-slate-100
          clip-custom
          text-slate-500
          text-5xl
          flex
          font-bold
          items-center
          justify-center
          
        "
          >
            <p>Html</p>
          </div>
          <h2
            className="
            w-full
            h-36
            flex
            items-center
            justify-center
            text-5xl
          "
          >
            About me
          </h2>
          <h4
            className="
              mt-10
              w-1/4
              m-auto
              text-[1.2rem]
            "
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
            iusto obcaecati odit quibusdam numquam repellendus.
          </h4>
        </article>
        <article>
          <h3
            className="        
              text-5xl  
              mt-20       
              h-36
            "
          >
            Portfolio
          </h3>
        </article>
      </section>
    </main>
  );
}

export default App;
