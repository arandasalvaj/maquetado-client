import React,{ useState } from 'react'

const Perfil = () => {
    const [showSideItem,setShowsideItem] = useState(0)


    const changeNav = () =>{
        switch (showSideItem) {
            case 0:
                return (
                    <div>
                        <div className='py-2'>
                            <label>Nombre</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text"  placeholder="value"/>
                        </div>
                        <div className='py-2'>
                            <label >Apellidos</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text"  placeholder="value"/>
                        </div>
                        <div className='py-2'>
                            <label>Rut</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text"  placeholder="value"/>
                        </div>
                        <div className='py-2'>
                            <label>Fecha Nacimiento</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text"  placeholder="value"/>
                        </div>
                    </div>
                )
                break;
            case 1:
                return (
                    <div>
                        <div className='py-2'>
                            <label>Dirección</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text"  placeholder="value"/>
                        </div>
                        <div className='bg-red-500 h-[200px] flex flex-col'>
                            MAPA
                        </div>
                    </div>
                )
                break;
            case 2:
                return (
                    <div>
                        <div className='py-2'>
                            <label>Contraseña</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text"  placeholder="value"/>
                        </div>
                        <div className='py-2'>
                            <label >Repite Contraseña</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text"  placeholder="value"/>
                        </div>
                    </div>
                )
                break;
            default:
                break;
        }
    }

  return (
    <div className="container mx-auto my-36">
        <div>
            <div className="bg-white relative shadow rounded-lg w-5/6 md:w-4/6  lg:w-3/6 xl:w-2/6 mx-auto">
                <div className="flex justify-center">
                        <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"/>
                </div>
                <div className="mt-16">
                    <h1 className="font-bold text-center text-3xl text-gray-900">Jean Nicolas</h1>
                    <p className="text-center text-sm text-gray-400 font-medium">Cercado Mamani</p>
                    <div className="my-5 px-6">
                        <div href="#" className="text-white font-bold block rounded-lg text-center  leading-6 px-6 py-3 bg-green-900  "><span className="font-bold text-2xl">Agricultor</span></div>
                    </div>
                    <div className="flex justify-between items-center my-5 px-6">
                        <div onClick={()=>setShowsideItem(0)} className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">General</div>
                        <div onClick={()=>setShowsideItem(1)} className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Dirección</div>
                        <div onClick={()=>setShowsideItem(2)} className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Contraseña</div>
                    </div>
                        <div className="flex flex-col items-center overflow-hidden text-sm">
                        {changeNav()}
                        </div>
                    <center className='py-4'>
                        <button href="#" className="text-white font-bold rounded-lg text-center leading-6 px-6 py-3 bg-green-900 "><span className="font-bold text-xl">Editar</span></button>
                    </center>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Perfil