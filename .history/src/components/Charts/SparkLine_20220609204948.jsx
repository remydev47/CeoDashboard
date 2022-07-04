import React from 'react'
import { SparklineComponent,Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';


const SparkLine = ({ id, height, width, color, data, type, currentColor }) => {
  return (
    <div>
      <SparklineComponent
      id={id}
      height={height}
      width={width}
      lineWidth={1}
      valueType="Numeric"
      fill={color}
      border={{ color: currentColor, width: 2 }}
      dataSource={data}
      xName="x"
      yName="y"
      type={type}
      tooltipSettings={{
        visible: true,
        format: '${x} : data ${y}',
        trackLineSetting: {
          visible: true
        }
      }}
      >
        <Inject services={[SparklineTooltip]} />
      </SparklineComponent>
    </div>
  );
}

export default SparkLine;