import React from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

const EmployeeChart = ({ clients, employees }) => {
  const employeeCounts = employees.map(
    (employee) =>
      clients.filter((client) => client.selected_admin === employee).length
  )

  const unassignedCount = clients.filter(
    (client) => !client.selected_admin
  ).length

  const data = {
    labels: ['Не назначен', ...employees],
    datasets: [
      {
        data: [unassignedCount, ...employeeCounts],
        backgroundColor: [
          '#F5F5DC',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
        ],
        hoverBackgroundColor: [
          '#F5F5DC',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
        ],
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const label = tooltipItem.label || ''
            const value = tooltipItem.raw || 0
            const total = tooltipItem.dataset.data.reduce(
              (acc, val) => acc + val,
              0
            )
            const percentage = ((value / total) * 100).toFixed(2)
            return `${label}: ${value} (${percentage}%)`
          },
        },
      },
    },
  }

  return <Pie data={data} options={options} />
}

export default EmployeeChart
