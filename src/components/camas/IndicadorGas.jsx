import React from 'react'

import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend,Filler} from 'chart.js'

import {Line} from 'react-chartjs-2'

ChartJS.register(CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend,Filler)

const IndicadorGas = ({titulo}) => {

    const scores =  [115,115,114,114,115,116,112,111,114]
    const labels = ["13:30","13:50","14:00","14:20","14:40","15:00","15:20","15:40","16:00"] 
  
    const options = {
      responsive:true,
      fill:true
    }
    
    const data = {
  
      datasets:[{
        label:titulo,
        data:scores,
        tension: 0.3,
        borderColor: "rgb(75,192,192)",
        pointRadius:6,
        pointBackgroundColor: "rgb(75,192,192)",
        backgroundColor:"rgba(75,192,192,0.3)",
      },
    ],
    labels
    }
    
    return (
    <>
      <div className='w-[700px] border border-black rounded-lg my-4'>
        <div className='bg-green-700 py-4 rounded-t-lg'>
          <h1 className='text-center text-white font-semibold text-xl'>{titulo}</h1>
        </div>
        <Line options={options} data={data} style={{}} />
      </div>
  
    </>
    )
  }

export default IndicadorGas