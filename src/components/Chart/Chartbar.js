import React from 'react';

function Chartbar(props) {

    let barFillHeight = "0%";

    if (props.max > 0) {
        barFillHeight = Math.round(props.value / props.max) * 100 + '%';
    }

    return (
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                <div className='chart-bar__fill'>
                    <div className='chart-bar__label'>{props.label}</div>
                </div>
            </div>
        </div>
    )
}

export default Chartbar;