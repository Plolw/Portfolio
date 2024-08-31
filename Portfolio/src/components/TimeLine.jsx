import React from 'react'
import TimeCubeCanvas from './TimeCubeCanvas'

const TimeUnit = ({ time, setCurrentDate }) => {
    return (
        <div>
            <div className='flex flex-row items-center'>
                <TimeCubeCanvas time={time} setCurrentDate={setCurrentDate} />
                <div className='bg-secondary w-24 h-1'></div>
            </div>
        </div>
    )
}


const TimeLine = ({ timesData, setCurrentDate }) => {
    return (
        <div className='flex flex-row w-full'>
            {timesData.map((time, index) => (
                <TimeUnit time={time} setCurrentDate={setCurrentDate} key={index} />
            ))}
        </div>
    )
}

export default TimeLine