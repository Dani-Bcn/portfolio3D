import React from 'react'

export default function About() {
  return (
    <section
    className="
      flex
      flex-col
      items-center
      justify-center
      w-[80%]
      m-10
      h-[600px]
      bg-gradient-to-t to-orange-200 from-slate-900/[0]
      rounded-tl-[150px]
      rounded-tr-[150px]
      z-10
    "
  >
    <h2
      className="           
        mt-16
        h-24
        text-slate-50
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
        bg-clip-text
        text-transparent
        bg-gradient-to-t to-indigo-600 from-orange-400
      "
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
      tempora? Voluptas et quae fugit, veritatis molestiae error
      praesentium.
    </p>
  </section>
  )
}
