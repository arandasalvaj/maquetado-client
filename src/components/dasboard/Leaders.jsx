import React from "react"
import { MdLeaderboard } from "react-icons/md";

const Leaders = () => {
  return (
    <> 
    <div className=" grid grid-cols-1 sm:grid-cols-4 gap-8 px-8 py-4">
        <div className="bg-white rounded-lg shadow-sm min-h-[150px] sm:col-span-3 grid gap-8 py-4 items-center justify-center sm:flex sm:items-center sm:justify-around ">
            <div className="flex items-end gap-3 ">
                <MdLeaderboard className="text-4xl text-purple-400"/>
                <div>
                    <p className="tracking-normal flex justify-start font-semibold text-2xl ">1001</p>
                    <h1 className="flex gap-3 items-end text-sm text-gray-500 font-semibold">  Purchase</h1>
                </div>
            </div>          
            <div className="flex items-end gap-3">
                <MdLeaderboard className="text-4xl text-red-400"/>
                <div>
                    <span className="flex justify-start font-semibold text-2xl">5000</span>
                    <h1 className="flex gap-3 items-end">Sale</h1>
                </div>
            </div>          
            <div className="flex items-end gap-3">
                <MdLeaderboard className="text-4xl text-purple-400"/>
                <div>
                    <span className="flex justify-start font-semibold text-2xl">5000</span>
                    <h1 className="flex gap-3 items-end">Sales Return</h1>
                </div>
            </div>          
            <div className="flex items-end gap-3">
                <MdLeaderboard className="text-4xl text-red-400"/>
                <div>
                    <span className="flex justify-start font-semibold text-2xl">5000</span>
                    <h1 className="flex gap-3 items-end">Purchase Ret</h1>
                </div>
            </div> 
        </div>
        <div className="bg-white rounded-lg shadow-sm min-h-[150px] col-span-1 flex items-center justify-center">PURCHASE ORDER VALUE</div>
    </div>
  </>
  )
}

export default Leaders