import React from "react";

export default function Title() {
  return (
    <section
      className="
        flex
        flex-col
        my-72
        items-center
        justify-between
        w-[90%]
        m-auto
        z-10
    "
    >
      <h2
        className="
            w-full
            text-8xl
            h-[120px]
            font-Play
            text-transparent
            bg-clip-text
            bg-gradient-to-r from-indigo-900 to-indigo-100
        "
      >
        Dani
      </h2>
      <h1
        className="
            w-full
            text-end
            text-9xl
            text-transparent
            bg-clip-text
            bg-gradient-to-r from-indigo-900 to-indigo-300
            h-[120px]
            font-Play
        "
      >
        Pérez
      </h1>
    </section>
  );
}
