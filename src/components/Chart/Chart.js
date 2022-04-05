import React from 'react';
import Chartbar from './Chartbar';
import './Chart.css'

function Chart(props) {



    return (
        <ul className='Chart'>
            {props.dataPoints.map(eachDataPoint =>
                <Chartbar
                    value={eachDataPoint.value}
                    maxValue={null}
                    label={eachDataPoint.label}
                    key={eachDataPoint.label}
                />)}
        </ul>
    )
}

export default Chart;