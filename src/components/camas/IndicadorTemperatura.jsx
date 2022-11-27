import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import moment from "moment";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function IndicadorTemperatura({titulo, datos}) {
  console.log(datos)
  
    const optimo = 26.15;

    const options = {
        responsive: true,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        stacked: false,
        scales: {
          y: {
            type: 'linear',
            display: true,
            position: 'left',
          },
        },
      };
      
    

  return (
    <>
    <div className='w-[700px] border border-black rounded-lg my-4'>
        <div className='bg-green-700 py-4 rounded-t-lg' >
          <h1 className='text-center text-white font-semibold text-xl'>{titulo}</h1>
        </div>
      <Line options={options} data={{
        labels: (datos ? datos.map(dato => moment(dato.created_at).format("HH:mm")) : ''),
        datasets: [
            {
            label: 'Real',
            data: (datos ? datos.map(dato => dato.temperatura_ambiente) : ''),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            yAxisID: 'y',
            
            },
            {
                label: 'Optimo',
                data: (datos ? datos.map(dato => optimo ) : ''),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                radius: 0,
                yAxisID: 'y',
            }

    ]

  }} />;
  </div>
    </>
  )
}
export default IndicadorTemperatura