import React from 'react'

const Timeline = (props) => {
    const { index, start, end, desc, company } = props;

    let timelineStyle = "timeline-item timeline-left";
    if (index % 2 === 0) {
        timelineStyle = "timeline-item timeline-right";
    }

    return (
        <div className={timelineStyle}>
            <div className='timeline-empty'></div>
            <div className='timeline-info'>
                <p style={{ "color": "#920052" }}>{`${start} - ${end}`}</p>
                <p>{`${desc}`}</p>
                <p style={{ "color": "#5f5f5f" }}>{`${company}`}</p>
            </div>
        </div>
    )
}

export default Timeline;