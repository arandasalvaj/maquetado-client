import React from 'react'

const LoaderTableList = () => {
  return (
    <div className='flex justify-center py-5'>
      <div className=" animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-green-700 rounded-full" role="status" aria-label="loading">
        <span className="sr-only px-6 py-4 whitespace-nowrap text-center">Loading...</span>
      </div>
    </div> 
  )
}

export default LoaderTableList