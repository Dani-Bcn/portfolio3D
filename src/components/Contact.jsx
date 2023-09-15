import React from "react";
import Links from "./Links";

export default function Contact() {
  return (
    <main
      id="contact"
      className="
      w-screen
      h-screen
      bg-slate-500
      flex
      flex-col
      items-center
      justify-around
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
        <a href="mailto:nneodani@gmail.com">
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
        <h3 className="text-white  z-10">651110553</h3>
        <section
          className="
                  flex
                  items-end
                  justify-center
                  w-screen
                  
                  "
        >
          <Links />
        </section>
    </main>
  );
}
