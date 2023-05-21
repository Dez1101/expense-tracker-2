import React from 'react';
import { ChatBar } from './ChatBar';
import './Chart.css'

export const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
    const totalMaximum = Math.max(...dataPointValues)
  return (
    <div className='chart'>
        {
            props.dataPoints.map(dataPoint => <ChatBar 
                                                key={dataPoint.label}
                                                value={dataPoint.value} 
                                                maxValue={totalMaximum}
                                                label={dataPoint.label} />)
        }
    </div>
  )
}
