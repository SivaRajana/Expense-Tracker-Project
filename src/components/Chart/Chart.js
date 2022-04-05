import React from 'react';
import Chartbar from './Chartbar';
import './Chart.css'

function Chart(props) {
    const tempArray = props.dataPoints.map(item => item.value)
    const maxAmountOfYear = Math.max(...tempArray);
    // console.log(maxAmountOfYear);
    return (
        <div className='chart'>
            {props.dataPoints.map(eachDataPoint => {
                return (
                    <Chartbar
                        key={eachDataPoint.label}
                        value={eachDataPoint.value}
                        maxValue={maxAmountOfYear}
                        label={eachDataPoint.label}
                    />)
            }
            )
            }

        </div>
    )
}

export default Chart;