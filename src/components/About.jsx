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
      bg-gradient-to-t to-emerald-300/[0.5] from-gray-50/[0.1]
      rounded-tl-[150px]
      rounded-tr-[150px]
      z-10
    "
  >
    <h2
      className="           
        mt-16
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
  )
}
