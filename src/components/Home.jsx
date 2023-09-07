import { React, useEffect, useRef, useState } from "react";
import { motion as m } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
export default function Home() {
  const navigate = useNavigate();
  const button2dRef = useRef();
  const button3dRef = useRef();

  const [removeEvent, setRemoveEvent] = useState();

  const hadleChange = () => {
    window.innerWidth > 670 ? setRemoveEvent(true) : setRemoveEvent(false);
  };

  window.addEventListener("resize", hadleChange);

  console.log(removeEvent);

  const Over2d = () => {
    gsap.to("#back2d", {
      width: "100vw",
      duration: 0.5,
      ease: "power4.in",
    });

    gsap.to("#button2d", {
      duration: 1,
      borderRadius: 100,
      rotateZ: 360,
      backgroundColor: "rgba(0,0,0,0)",
    });
    gsap.to("#button3d", {
      opacity: 0,
    });

    gsap.to("#titleName", {
      x: 550,
      duration: 0.5,
      ease: "power4.in",
    });
    gsap.to("#subTitle", {
      x: -500,
      duration: 0.5,
      ease: "power4.in",
    });
  };

  const Out2d = () => {
    gsap.to("#back2d", {
      width: "50vw",
      duration: 0.5,
      ease: "power4.out",
    });

    gsap.to("#button2d", {
      duration: 0.5,
      borderRadius: 5,
      border: 2,
      rotateZ: 0,
    });
    gsap.to("#button3d", {
      opacity: 1,
    });

    gsap.to("#titleName", {
      x: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power4.out",
    });

    gsap.to("#subTitle", {
      x: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power4.out",
    });
  };

  const Over3d = () => {
    gsap.to("#back2d", {
      width: "0vw",
      duration: 0.5,
      ease: "power4.in",
      opacity: 1,
    });

    gsap.to("#button3d", {
      duration: 1,
      borderRadius: 100,
      rotateZ: -360,
    });
    gsap.to("#button2d", {
      opacity: 0,
    });

    gsap.to("#titleName", {
      x: -550,
      duration: 0.5,
      ease: "power4.in",
    });

    gsap.to("#subTitle", {
      x: 500,
      duration: 0.5,
      ease: "power4.in",
    });
  };

  const Out3d = () => {
    gsap.to("#back2d", {
      width: "50vw",
      duration: 0.5,
      ease: "power4.out",
    });
    gsap.to("#button3d", {
      duration: 0.5,
      borderRadius: 5,
      rotateZ: 0,
    });
    gsap.to("#button2d", {
      opacity: 1,
    });
    gsap.to("#titleName", {
      x: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power4.out",
    });
    gsap.to("#subTitle", {
      x: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power4.out",
    });
  };

  return (
    <m.main
      animate={{
        opacity: [0, 1],
        transition: {
          duration: 0.1,
        },
      }}
      exit={{
        opacity: [1, 0],
        transition: {
          duration: 0.5,
        },
      }}
      className="
        w-screen
        h-screen
        flex
        justify-center
        items-center
        bg-image
        absolute
        z-10
        bg-cover
        bg-no-repeat"
    >
      <div
        id="back2d"
        className="
            absolute
            start-0           
            w-1/2
            h-screen
            bg-gray-800
            z-10
          "
      ></div>
      <div
        id="back3d"
        className="
            absolute
            end-0           
            w-1/2
            h-screen
            bg-orange-200
            z-2
          "
      ></div>
      <section
        className="
      h-3/4
      text-center
        flex
        items-center
        justify-between
        font-bold        
        text-6xl
        flex-col
        z-50
        "
      >
        <m.p
          id="titleName"
          animate={{
            y: [1300, 0],
            opacity: [0.001, 0.8, 1],
            transition: {
              duration: 1,
              ease: "circOut",
            },
          }}
          className="text-7xl text-sky-300 z-50 xl:text-9xl"
        >
          I`m Dani
        </m.p>
        <m.p
          id="subTitle"
          animate={{
            y: [1500, 0],
            opacity: [0.001, 0.8, 1],
            transition: {
              duration: 1,
              delay: 0.2,
              ease: "circOut",
            },
          }}
          className="text-4xl text-teal-400 z-50  xl:text-7xl"
        >
          Welcome !!!
        </m.p>
        <article
          className="
        w-full h-24 flex justify-between items-center z-50"
        >
          <m.button
            id="button2d"
            onPointerOver={() => Over2d()}
            onPointerOut={() => Out2d()}
            className="
          w-16
          h-16
          m-2         
          text-2xl
           text-blue-800
          z-50
          border-2
          border-orange-200
          bg-contain
          bg-center
     bg-[url('./assets/img/2d.png')]
          "
          ></m.button>
          <m.button
            id="button3d"
            onClick={() => navigate("/3d")}
            onPointerOver={() => Over3d()}
            onPointerOut={() => Out3d()}
            className="
            flex
            items-center
            justify-center
            w-16
            h-16
            m-2
            text-2xl
           text-blue-800
           border-2
           border-blue-400
           bg-contain
          bg-center
     bg-[url('./assets/img/3d.png')]
           "
          ></m.button>
        </article>
      </section>
    </m.main>
  );
}
