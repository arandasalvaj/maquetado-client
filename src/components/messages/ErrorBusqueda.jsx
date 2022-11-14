import React from 'react'

const ErrorBusqueda = ({message}) => {
  return (
    <div className="text-sm text-gray-600 px-6 py-4 whitespace-nowrap font-bold text-center border bg-[#FFFFFF] pb-6">
      {message}
    </div>
  )
}

export default ErrorBusqueda