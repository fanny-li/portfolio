import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const Timeline = (props) => {
    const { index, start, end, desc, company } = props;

    let timelineStyle = "timeline-item timeline-right";
    let fromSide = "fade-left";

    if (index % 2 !== 0) {
        timelineStyle = "timeline-item timeline-left";

        // console.log(window.innerWidth);
        // if (window.innerWidth > 1100) {
        //     console.log(window.innerWidth);
        fromSide = "fade-right";
        // }
    }

    return (
        <div className={timelineStyle} >
            <div className='timeline-empty'></div>
            <div className='timeline-info' data-aos={fromSide}
                data-aos-delay="50"
                data-aos-duration="800"
                data-aos-easing="ease-in-out"
            >
                <p style={{ "color": "#920052" }}>{`${start} - ${end}`}</p>
                <p>{`${desc}`}</p>
                <p style={{ "color": "#5f5f5f" }}>{`${company}`}</p>
            </div>
        </div >
    )
}

export default Timeline;