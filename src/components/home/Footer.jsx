import React from 'react'

const Footer = () => {

  // <p className="mt-4 text-sm text-gray-800">
  //   Cada aplicación está diseñada para un proceso especifico y contamos con soporte de
  //   ingeniería permanente.
  // </p>
  // <p className="mt-4 text-sm text-gray-800">
  //   Buscamos ser proveedores de largo plazo y potenciar la eficiencia y productividad de su
  //   operación (negocio) con soluciones de primera calidad.
  // </p>



  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <a href="/"aria-label="Go home" title="Company" className="inline-flex items-center">
            <img className="w-[160px] h-[85px]  object-contain " src='https://i.postimg.cc/pTVKL5pW/LOGOMHGLOBAL.png'></img>
          </a>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-gray-800">
              Contamos con el conocimiento de los procesos y operación de nuestros clientes y
              presentamos soluciones respaldadas técnicamente.
            </p>

          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-gray-900">
            Contacto
          </p>
          <div className="flex">
            <p className="mr-1 text-gray-800">Teléfono:</p>
            <a
              href="tel:2830192830"
              aria-label="Nuestro telefono"
              title="Nuestro telefono"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              2830192830
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Correo:</p>
            <a
              href="mhglobal@Mhglobal.cl"
              aria-label="Nuesto correo"
              title="Nuesto correo"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              mhglobal@Mhglobal.cl
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Dirección:</p>
            <a
              href="https://www.google.com/maps/place/Los+Cactus+%23321/@-22.4812605,-68.9341746,3a,75y,164.02h,90t/data=!3m6!1e1!3m4!1syTS9jEfzZUN3i8edRHul4w!2e0!7i13312!8i6656!4m2!3m1!1s0x96ac0848e67bb69f:0x52be791ef419bb96"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Nuestra dirección"
              title="Nuestra dirección"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Los Cactus #321, Calama
            </a>
          </div>
        </div>
        <div>
          <span className="text-base font-bold tracking-wide text-gray-900">
            Redes Sociales
          </span>
          <div className="flex items-center mt-1 space-x-3">
            
            <a
            
              href="https://web.whatsapp.com/"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg
               className="w-6 h-6 text-green-400 fill-current"
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 448 512">
            <path
            d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
            ></path>
            </svg>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100000990039197"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg
              className="w-6 h-6 text-blue-600 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path
                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
              />
            </svg>
            </a>
            <a
              href="https://twitter.com/"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
            <svg
            className="w-6 h-6 text-blue-300 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <path
              d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
            />
          </svg>
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-500">
      
        </p>
        <div></div>

        </div>
      </div>
      <div className="flex flex-col-reverse justify-center pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-gray-600">
          © Copyright 2022 MH Global. Todos los derechos reservados.
        </p>
      </div>
    </div>
  )
}

export default Footer