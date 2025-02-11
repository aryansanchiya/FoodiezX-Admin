import React from 'react';
import { PolarArea } from 'react-chartjs-2';

const CustomPolarRadar = () => {
    const data = {
        labels: ['Available', 'Occupied'],
        datasets: [
            {
                label: 'Dataset',
                data: [11, 16],
                backgroundColor: [
                    'rgba(25, 135, 84, 0.7)', 
                    'rgba(236, 100, 75, 0.7)' 
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
        },
    };

    return (
        <PolarArea data={data} options={options} />
    );
};

export default CustomPolarRadar;
