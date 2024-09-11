import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary chart.js components
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Histogram = ({ binEdges, frequencies }) => {
  // Prepare data for the histogram
  const data = {
    labels: binEdges.map((edge, index) => `${edge.toFixed(2)}-${binEdges[index + 1]?.toFixed(2) || ''}`), // Labeling bins
    datasets: [
      {
        label: 'Frequency',
        data: frequencies,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Chart.js options for the histogram
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Histogram',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Bins',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Frequency',
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default Histogram;
