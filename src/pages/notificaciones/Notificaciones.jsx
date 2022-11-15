import React from 'react'
import { useEffect } from 'react'
import {getAllNotificaciones} from '../../services/notificaciones'
import { GoAlert } from 'react-icons/go'
import { IoTrashOutline } from 'react-icons/io5'
const Notificaciones = () => {
    const [notificaciones,setNotificaciones]=useState([])

    useEffect(()=>{
        getAllNotificaciones()
        .then((response)=>{
            setNotificaciones(response.data)
        })
        .catch((error)=>{

        })
    },[])
  
    return (
      <div className="mx-auto w-full max-w-7xl shadow rounded bg-white overflow-x-auto">
        <ul className="flex flex-col">
          {notificaciones.map((item,index) => (
            <li key={item.index} className="py-5 px-4 flex justify-between items-center border-b border-gray-100">
              {/* :CHECK BOX */}
              <div className="flex-shrink-0 mr-8 flex items-center space-x-2">
                {/* ::Icon */}
                {/* ::Check Input */}
                <div className="inline-flex items-center">
                  <label htmlFor="checked" className="sr-only">User selected</label>
                  <input type="checkbox" id="checked" name="checked"
                    className="w-5 h-5 rounded border-gray-300 text-blue-500 cursor-pointer focus:ring-blue-400"
                  />
                </div>
              </div>
  
  
              {/* :ITEM DETAILS */}
              <div className="flex-grow w-full flex items-center">
                {/* ::Picture */}
                <GoAlert className='w-14 h-14'/>
                <div className="space-y-1 truncate">
                  {/* ::Title */}
                  <h3 className="text-base text-gray-700 font-semibold">{item.nombre_alerta}</h3>
                  {/* ::Link */}
                  <a href={item.link} className="text-sm text-gray-500" >{item.link}</a>
                </div>
              </div>
  
  
              {/* :ACTION BUTTONS */}
              <div className="px-4 flex items-center space-x-4">
                {/* ::Reply Button */}
                <button type="button" className="inline-flex justify-center items-center text-gray-400 hover:text-blue-500">

                </button>
                {/* ::Delete Button */}
                <button type="button" className="inline-flex justify-center items-center text-gray-400 hover:text-blue-500">
                    <IoTrashOutline className='w-14 h-14'/>
                </button>
                {/* ::Option Button */}
                <button type="button" className="inline-flex justify-center items-center text-gray-400 hover:text-blue-500">
                </button>
              </div>
  
            </li>
          ))
          }
        </ul>
      </div>
    )
  }

export default Notificaciones