import React from "react";
import Links from "./Links";

export default function Contact() {
  return (
    <main
    
    className=" h-[590px]">
      <section
        id="contact"
        className="
        absolute
        flex
        flex-col
        items-center
        justify-around
        w-[80%]
        m-10
        h-[590px]
        bg-gradient-to-t to-orange-200 from-slate-900/[0]
        rounded-tl-[150px]
        rounded-tr-[150px]
        z-20
      "
      >
        <h2
          className="
        text-white
        mt-20
      z-10
        "
        >
          Contact
        </h2>
        <a href="mailto:nneodani@gmail.com" className="  z-10">
          <h3
            className="
                    text-[2rem]
                    w-full
                    text-white
                    h-12
                    z-10
                    "
          >
            nneodani@gmail.com
          </h3>
        </a>
        <h3 className="text-white   z-10">651110553</h3>
        <section
          className="
                  flex
                  items-center
                  justify-center
                  w-screen"
        >
          <Links />
        </section>
      </section>
      <div
        className="
        mt-0
          absolute
          w-screen
          h-screen
          bg-gradient-to-t to-slate-400/[0] from-slate-600
          z-1
        "
      ></div>
    </main>
  );
}
