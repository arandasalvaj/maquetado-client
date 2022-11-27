

const Informacion = ({ubicacion}) => {
  return (
    <>
        <div className=" grid grid-cols-4 gap-4 px-8 py-4 grid-flow-cols-dense">
            <div className="bg-green-400 rounded-lg shadow-sm  col-span-3 sm:col-span-2 row-span-4 flex items-center justify-center"> 
                <div className="py-16 sm:py-0">
                    <h1 className='text-5xl text-white font-bold text-center'>{ubicacion}</h1>  
                </div>  
            </div>
            <div className="bg-[#154D80] rounded-lg shadow-sm h-[300px] col-span-3 sm:col-span-2 row-span-4 flex items-center justify-center"> 
                <div className="py-16 sm:py-0">
                    <h1 className='text-4xl text-white font-bold text-center'>Cultivo NOMBRE</h1>
                    <p className='text-2xl text-white  text-center grid grid-rows-3 font-semibold'>Fecha de creación
                        <span className="font-semibold">1-01-2022</span>
                    </p>
                </div>  
            </div>
        </div>
    </>
  )
}

export default Informacion