import React from 'react';
import { Line } from 'react-chartjs-2';

const CustomLineChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
    datasets: [
      {
        label: 'Sales ($)',
        data: [200, 300, 250, 400],
        borderColor: '#4caf50',
        backgroundColor: 'rgba(25, 135, 84, 0.7)',
        tension: 0.4,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false, // Disable legend
      },
    },
    responsive: true
  };

  return <Line data={data} options={options} />;
};

export default CustomLineChart;
