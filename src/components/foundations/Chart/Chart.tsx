import React, { ReactElement } from 'react'
import { Radar } from 'react-chartjs-2'
import { MDBContainer } from 'mdbreact'

import { DataProps, Stats } from './Chart.d'

export default function Chart({ stats }: DataProps): ReactElement {
  const labels: string[] = []
  const data: number[] = []

  stats.map((stat: Stats) => {
    labels.push(stat.stat.name)
    data.push(stat.base_stat)
  })

  const state = {
    dataRadar: {
      labels,
      datasets: [
        {
          label: 'Stats',
          backgroundColor: 'rgba(194, 116, 161, 0.5)',
          borderColor: 'rgb(194, 116, 161)',
          data,
        },
      ],
    },
  }

  const options = {
    responsive: true,
    scale: {
      ticks: {
        beginAtZero: true,
        max: 200,
        min: 0,
      },
    },
  }

  return (
    <MDBContainer>
      <Radar data={state.dataRadar} options={options} />
    </MDBContainer>
  )
}
