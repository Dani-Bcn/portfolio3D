import React from "react";

export default function Links() {
  return (
    <main
      className="
           text-white
            text-[1.2rem]
             w-[90%]
                    flex
                    mb-32
                    items-center
                    justify-between
                    z-10
                "
    >
      <a
        href="https://www.linkedin.com/in/daniperezbnc/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          className="
              w-28
              h-16
              rounded-[40px]
              bg-indigo-300
          "
        >
          Linkedin
        </button>
      </a>
      <a
        href="https://www.domestika.org/es/nneodani/portfolio"
        target="_blank"
      >
        <button
          className="
              w-28
              h-16
              rounded-[40px]
              bg-indigo-300
          "
        >
          Domestika
        </button>
      </a>
      <a href="https://github.com/Dani-Bcn"  target="_blank">
        <button
          className="
              w-28
              h-16
              rounded-[40px]
              bg-indigo-300
          "
        >
          GitHub
        </button>
      </a>
    </main>
  );
}
