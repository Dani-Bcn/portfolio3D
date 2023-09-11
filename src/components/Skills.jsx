import React from 'react'

export default function Skills() {
    
    const wordsFrontEnd = ["Html", "Css", "Js", "React"];

  return (
    <section
    className="
    flex
    flex-col
    items-center
    justify-between
    w-[80%]
    mx-10
    h-[800px]
    bg-gradient-to-t to-emerald-300/[0.5] from-emerald-50/[0.1]
    rounded-tl-[150px]
    rounded-tr-[150px]
    z-10
  "
  >
    <h2
      className="
      mt-32
    "
    >
      Skills
    </h2>
    <article
      className="
      flex
      items-center
      justify-between
      w-[110%]
      h-full  
      "
    >
      <section
        className="
          flex
          flex-col                         
        "
      >
        {" "}
        <h4>f-end</h4>
        {wordsFrontEnd.map((e, i) => {
          return (
            <p
              className="
              flex     
                         
              items-center
              justify-center
              w-[100px]
              h-24
              my-2
              bg-slate-300
              clip-custom
            "
              key={i}
            >
              {e}
            </p>
          );
        })}
      </section>
      <section
        className="
          flex
          flex-col
                      
        "
      >
        <h4>B-end</h4>
        {wordsFrontEnd.map((e, i) => {
          return (
            <p
              className="
              flex     
                         
              items-center
              justify-center
              w-[100px]
              h-24
              my-2
              bg-slate-300
              clip-custom
            "
              key={i}
            >
              {e}
            </p>
          );
        })}
      </section>
      <section
        className="
          flex
          flex-col
                       
        "
      >
        <h4>Design</h4>
        {wordsFrontEnd.map((e, i) => {
          return (
            <p
              className="
              flex     
                         
              items-center
              justify-center
              w-[100px]
              h-24
              my-2
              bg-slate-300
              clip-custom
            "
              key={i}
            >
              {e}
            </p>
          );
        })}
      </section>
    </article>
  </section>
    )
}
