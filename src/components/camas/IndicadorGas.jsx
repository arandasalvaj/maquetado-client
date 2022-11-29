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

function IndicadorGas({titulo, datos}) {
  // console.log(datos)
  
    const optimo = 450;

    const options = {
        responsive: true,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        stacked: false,
        plugins: {
          title: {
            display: true,
            text: 'Dioxido de Carbono (PPM)',
          },
        },
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
    <div className='border border-black rounded-lg'>
        <div className='bg-green-700 py-4 rounded-t-lg' >
          <h1 className='text-center text-white font-semibold text-xl'>{titulo}</h1>
        </div>
      <Line options={options} data={{
        labels: (datos ? datos.map(dato => moment(dato.created_at).format("HH:mm")) : ''),
        datasets: [
            {
            label: 'Real',
            data: (datos ? datos.map(dato => dato.ppm_gas ) : ''),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            yAxisID: 'y',
            
            },
            {
                label: 'Optimo',
                data:(datos ? datos.map(dato => optimo ) : ''),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                radius: 0,
                yAxisID: 'y',
            }

    ]

  }} />
  </div>
    </>
  )
}
export default IndicadorGas