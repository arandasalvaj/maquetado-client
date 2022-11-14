import React from 'react'

const ErrorMessage = ({message}) => {
    return(
        <div className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap font-bold text-center border bg-[#FFFFFF] pb-6">
            {message}
        </div>
    )
}

export default ErrorMessage