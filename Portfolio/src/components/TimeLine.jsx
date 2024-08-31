import React from 'react'
import TimeCubeCanvas from './TimeCubeCanvas'


const TimeLine = ({ timesData, setCurrentDate }) => {
    return (
        <div className='flex flex-row w-full'>
            {timesData.map((time, index) => (
                <React.Fragment key={index}>
                    <TimeCubeCanvas time={time} setCurrentDate={setCurrentDate} />
                    {index < timesData.length - 1 && <div className='bg-secondary w-96 h-1'></div>}
                </React.Fragment>
            ))}
        </div>
    )
}

export default TimeLine