import React from "react";
import gsap from "gsap";

export default function Home() {
  const wordsFrontEnd = ["Html", "Css", "Js", "React"];

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
         
        "
        >
          Dani
        </h1>
        <h1
          className="
        w-full
        text-end
        h-[120px]
        
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
          bg-gradient-to-t to-emerald-300/[0.5] from-gray-50/[0.1]
          rounded-tl-[150px]
          rounded-tr-[150px]
          z-10
        "
      >
        <h2
          className="           
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
        justify-between
        w-[80%]
        mt-20
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
          mt-20
        ">
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
          > <h4>f-end</h4>
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
