import React from 'react'

export default function Contact() {
    return (
        <main
        className="
        flex
        flex-col
        items-center
        justify-between
        w-[80%]
        mx-10
        h-[800px]
        bg-gradient-to-t to-orange-200 from-slate-900/[0]
        rounded-tl-[150px]
        rounded-tr-[150px]
        z-10
      "
      >
        <h2
          className="
          mt-32
          text-slate-50
        "
        >
          Contact
        </h2>
        <section
          className="
          flex
          items-start
          justify-between
          w-[110%]
          h-full  
          "
        >
            <article
                className='
                    w-full
                    h-52
                    flex
                    items-start
                    justify-center                    
                '
            >
                <h3
                    className='
                    text-[1.9rem]
                    '   
                >nneodani@gmail.com</h3>
            </article>
            
          
        </section>
      </main>
        )
    }