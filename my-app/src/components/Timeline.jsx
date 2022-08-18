import React from 'react'

const Timeline = (props) => {
    const { start, end, desc } = props;
    return (
        <div>
            <p>{`${start} - ${end}`}</p>
            <p>{`${desc}`}</p>
        </div>
    )
}

export default Timeline;