import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

const Chart = ({ value }) => {
  const data = {
    labels: ['Value', 'Remaining'],
    datasets: [
      {
        data: [value, 100 - value],
        backgroundColor: ['#FF6384', '#DDDDDD'],
        hoverBackgroundColor: ['#FF6384', '#CCCCCC'],
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    cutout: '70%',
  }

  return (
    <div className="relative w-64 h-64">
      <Doughnut data={data} options={options} />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl font-bold">{value}%</span>
      </div>
    </div>
  )
}

export default Chart
