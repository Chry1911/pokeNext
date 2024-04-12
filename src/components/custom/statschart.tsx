import React from 'react';
import { VictoryChart, VictoryBar, VictoryLabel, VictoryTheme } from 'victory';

const StatsChart = () => {
  const data = [
    { stat: 'HP', value: 3 },
    { stat: 'Attack', value: 4 },
    { stat: 'Defense', value: 3 },
    { stat: 'Sp. Attack', value: 3 },
    { stat: 'Sp. Defense', value: 3 },
    { stat: 'Speed', value: 5 },
  ];

  return (
    <div className='flex justify-center items-center space-x-4'>
      <VictoryChart theme={VictoryTheme.material} width={400} height={300} domainPadding={{ x: 20 }}>
        <VictoryBar
          data={data}
          x="stat"
          y="value"
          labels={({ datum }) => datum.value}
          labelComponent={<VictoryLabel dy={-10} style={{ fontSize: 12, fill: 'black' }} />} // Adjust font size and color here
          style={{ data: { fill: '#FF5733', fillOpacity: 0.6, strokeWidth: 2 } }} // Change bar color here
        />
      </VictoryChart>
    </div>
  );
};

export default StatsChart;