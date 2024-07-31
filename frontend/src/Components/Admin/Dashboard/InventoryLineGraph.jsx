import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const InventoryLineGraph = ({ itemsData }) => {
 
  const labels = itemsData.map(item => item.item);
  const quantities = itemsData.map(item => item.quantity);

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Quantity Over Items',
        data: quantities,
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      tooltip: {
        callbacks: {
          label: (context) => `Quantity: ${context.raw}`
        }
      }
    }
  };

  return <Line data={data} options={options} />;
};

export default InventoryLineGraph;
