import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";

export default function NavbarResponsive() {
  const [click, setClick] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (click) {
      gsap.to("#backNavbar", {
        y: 0,
        clipPath: "circle(75% at 50% 50%)",
        borderRadius: 0,
        duration: 1,
        ease: "expo.out",
      });
      gsap.to("#stickUp", {
        rotation: 45,
        y: 12.5,
        ease: "back.out",
      });
      gsap.to("#stickMed", {
        x: 100,
        ease: "back.out",
      });
      gsap.to("#stickDown", {
        rotation: -45,
        y: -12.5,
        ease: "back.out",
      });
    } else {
      gsap.to("#backNavbar", {
        y: -600,
        clipPath: "circle(20% at 50% 50%)",
        ease: "expo.in",
        duration: 0.5,
      });
      gsap.to("#stickUp", {
        rotation: 0,
        y: 0,
        ease: "back.out",
      });
      gsap.to("#stickMed", {
        x: 0,
        ease: "back.out",
      });
      gsap.to("#stickDown", {
        rotation: 0,
        y: 0,
        ease: "back.out",
      });
    }
  }, [click]);

  return (
    <main>
      <section
        onClick={() => setClick(!click)}
        className="
            sm:hidden
            absolute    
            top-0
            right-0
            flex
            flex-col
            items-center
            justify-around
            h-10
            w-10
            bg-slate-500
            z-50
            cursor-pointer
        "
      >
        <div
          id="stickUp"
          className="       
            h-1
            w-9
            bg-gray-900
            rounded-md          
        "
        ></div>
        <div
          id="stickMed"
          className="
            h-1
            w-9
            bg-gray-900
            rounded-md           
        "
        ></div>
        <div
          id="stickDown"
          className="
            h-1
            w-9
            bg-gray-900
            rounded-md
        "
        ></div>
      </section>
      <section
        id="backNavbar"
        className="
            absolute
            top-0
            left-0
            flex
            flex-col
            justify-around
            items-center
            w-screen
            h-screen
            backdrop-blur-md
            bg-slate-800/[0.5]
            z-20
        "
      >
        <ol
          className="
            h-full
            w-full
            flex
            flex-col
            justify-around
            items-center
        "
        >
          <li
            onClick={() => {
              navigate("/");
              setClick(!click);
            }}
            className="text-5xl text-red-200    cursor-pointer"
          >
            Home
          </li>
          <li
            onClick={() => {
              navigate("/contact");
              setClick(!click);
            }}
            className="text-5xl text-red-200    cursor-pointer"
          >
            Contact
          </li>
          <li
            onClick={() => {
              navigate("/more");
              setClick(!click);
            }}
            className="text-5xl text-red-200    cursor-pointer"
          >
            More
          </li>
        </ol>
      </section>
    </main>
  );
}
