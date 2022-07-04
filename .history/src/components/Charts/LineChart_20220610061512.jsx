import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, Legend, Tooltip, LineSeries } from '@syncfusion/ej2-react-charts'
import { lineCustomSeries, LinePrimaryYAxis, LinePrimaryXAxis } from '../../data/dummy'

const LineChart = () => {
  return (
    <ChartComponent>
      <Inject service={[LineSeries, DateTime, Legend, Tooltip ]} />
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item, index) => 
         <SeriesDirective key={index} {...item} />
        )}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default LineChart;