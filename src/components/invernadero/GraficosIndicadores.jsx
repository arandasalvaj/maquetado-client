import React from 'react'
const scores =  [6,5,5,5,3,4,6,4,5]
const labels = [100,200,300,400,500,600,700] 

import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend,Filler} from 'chart.js'

import {Line} from 'react-chartjs-2'

ChartJS.register(CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend,Filler)

const GraficosIndicadores = () => {
  const options = {
    responsive:true,
    fill:true
  }
  
  const data = {
    datasets:[{
      label:"CO2",
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
    <div className="grid grid-cols-2 gap-8 px-8 py-4 grid-flow-row-dense">
        <div className="bg-white rounded-lg shadow-sm min-h-[350px] col-span-2 sm:col-span-1 row-span-8  flex items-start justify-start py-2  ">
          <Line data={data} options={options} />
        </div>
        <div className="bg-white rounded-lg shadow-sm min-h-[350px] col-span-2 sm:col-span-1 row-span-8">
        <Line data={data} options={options} />
        </div>
        </div>

        
    
  )
}

export default GraficosIndicadores