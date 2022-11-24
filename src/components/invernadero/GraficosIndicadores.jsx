import React from 'react'

import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend,Filler} from 'chart.js'

import {Line} from 'react-chartjs-2'

ChartJS.register(CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend,Filler)

const GraficosIndicadores = ({titulo}) => {

  const scores =  [6,5,5,5,3,4,6,4,5,4,6,4,5]
  const labels = [100,200,300,400,500,600,700,400,500,600,700] 

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
      <div className='bg-green-700 py-4'>
        <h1 className='text-center text-white font-semibold text-xl'>{titulo}</h1>
      </div>
      <Line options={options} data={data} style={{}} />
    </div>

  </>
  )
}

export default GraficosIndicadores