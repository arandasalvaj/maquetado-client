import React from 'react'

const Servicios = () => {
  return (
    <>
        <h2 className=" text-[#7ACEA4] text-4xl pb-5 font-bold ">Nuestros servicios</h2>
        <div className="container px-6 py-12 mx-auto " >
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 ">
                <div>
                    <svg className="w-8 h-8" viewBox="0 0 30 30" fill="none">
                    </svg>

                    <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">Filtración industrial</h1>

                    <p className="mt-2 text-gray-500 dark:text-gray-400">Representamos en Chile los mejores equipos de filtracion industrial para distintas aplicaciones como proteccion de sistemas de osmosis, recuperacion de agua en torres de refrigeracion,proteccion de equipos industriales entre otras.</p>
                </div>

                <div>
                    <svg className="w-8 h-8" viewBox="0 0 30 30" fill="none">
                    </svg>

                    <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">Filtración industrial</h1>

                    <p className="mt-2 text-gray-500 dark:text-gray-400">Una amplia gama de sistemas para el control de olores en un formato simple, flexible a la medidas de sus procesos con PI2 technologies para la solucion a estos problemas.</p>
                </div>

                <div>

                    <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">Tratamiento de agua</h1>

                    <p className="mt-2 text-gray-500 dark:text-gray-400">Parte importante de los procesos industriales es el control de temperatura. En Chile contamos con la linea completa de REYMSA torres de refrigeracion fabricadas con el mas alto estandar y certificados en eficiencia.</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Servicios