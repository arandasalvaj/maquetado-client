import React from 'react'

const Servicios = () => {
    return (
      <>
          <h2 className=" text-[#7ACEA4] text-[45px] pb-5 font-bold ">Nuestros servicios</h2>
          <div className="container px-6 py-12 mx-auto " >
              <div className="grid grid-cols-1  gap-10 md:grid-cols-2 lg:grid-cols-3 ">
                  <div className='flex flex-col items-center sm:mt-4 lg:mt-2'>
                        <img className="w-[450px] h-[268px] object-fill rounded-xl" src='https://i.postimg.cc/2SxbJ8Sn/FILTRACION-ORIGINAL.jpg'></img>
                        
                        <h1 className="mt-4 sm:text-3xl lg:text-xl font-semibold text-gray-800 dark:text-black">Filtración industrial</h1>
                        <p className="mt-2 sm:text-lg lg:text-[15px] text-gray-500 dark:text-gray-400">Representamos en Chile los mejores equipos de filtracion industrial para distintas aplicaciones como proteccion de sistemas de osmosis, recuperacion de agua en torres de refrigeracion,proteccion de equipos industriales entre otras.</p>
                  </div>
                  <div className='flex flex-col items-center sm:mt-4 lg:mt-2'>
                       <img className="w-[450px] h-[268px]  object-cover rounded-xl" src='https://i.postimg.cc/C17cxV78/CONTORL-DE-OLORES.png'></img>
                       <h1 className="mt-4 sm:text-3xl lg:text-xl font-semibold text-gray-800 dark:text-black">Control de olores</h1>
                       <p className="mt-2 sm:text-lg lg:text-[15px] text-gray-500 dark:text-gray-400">Una amplia gama de sistemas para el control de olores en un formato simple, flexible a la medida de sus procesos con PI2 technologies para la solución a estos problemas.</p>
                  </div>
                  <div className='flex flex-col items-center sm:mt-4 lg:mt-2'>
                       <img className="w-[450px] h-[268px]  object-cover rounded-xl" src='https://i.postimg.cc/ZqcRffjH/ORIGINAL-TRATAMIENTO-DE-AGUA.jpg'></img>
                       <h1 className="mt-4 sm:text-3xl lg:text-xl font-semibold text-gray-800 dark:text-black">Tratamiento de agua</h1>
                       <p className="mt-2 sm:text-lg lg:text-[15px] text-gray-500 dark:text-gray-400">Parte importante de los procesos industriales es el control de temperatura. En Chile contamos con la linea completa de REYMSA torres de refrigeracion fabricadas con el mas alto estandar y certificados en eficiencia.</p>
                  </div>
              </div>
          </div>
      </>
    )
  }

export default Servicios