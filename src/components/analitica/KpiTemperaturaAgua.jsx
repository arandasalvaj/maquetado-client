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

function KpiTemperaturaAgua({datos}) {
    const optimo = 24;
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
        //   y1: {
        //     type: 'linear',
        //     display: true,
        //     position: 'right',
        //     grid: {
        //       drawOnChartArea: false,
        //     },
        //   },
        },
      };
      
    

  return <Line height={'100px'} options={options} data={{
        labels: (datos ? datos.map(dato => moment(dato.created_at).format('MM-DD')) : ''),
        datasets: [
            {
            label: 'Real',
            data: (datos ? datos.map(dato => dato.temperatura_agua) : ''),
            borderColor: 'rgb(219 39 119)',
            backgroundColor: 'rgb(219, 39, 119, 0.5)',
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
}
export default KpiTemperaturaAgua