import React from 'react'

const Footer = () => {
    return (
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <a href="/"aria-label="Go home" title="Company" className="inline-flex items-center">
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                MH Global
              </span>
            </a>
            <div className="mt-6 lg:max-w-sm">
              <p className="text-sm text-gray-800">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </p>
              <p className="mt-4 text-sm text-gray-800">
                Eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo.
              </p>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-base font-bold tracking-wide text-gray-900">
              Contacto
            </p>
            <div className="flex">
              <p className="mr-1 text-gray-800">Telefono:</p>
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
                href="/"
                className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                </svg>
              </a>
              <a
                href="/"
                className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                </svg>
              </a>
              <a
                href="/"
                className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                </svg>
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Bacon ipsum dolor amet short ribs pig sausage prosciutto chicken
              spare ribs salami.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-center pt-5 pb-10 border-t lg:flex-row">
          <p className="text-sm text-gray-600">
            © Copyright 2022 MH Global. Todos los derechos reservados.
          </p>
        </div>
      </div>
    );
  }

export default Footer