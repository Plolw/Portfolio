import React from 'react'
import TimeCubeCanvas from './TimeCubeCanvas'


const TimeLine = ({ timesData, setCurrentDate }) => {
    return (
        <>
            <div className='flex flex-row justify-center'>
                {timesData.map((time, index) => (
                    <React.Fragment key={index}>
                        <TimeCubeCanvas time={time} setCurrentDate={setCurrentDate} />
                        {index < timesData.length - 1 && <div className='bg-secondary w-32 h-1 self-center'></div>}
                    </React.Fragment>
                ))}
            </div>
            {/* <div className='flex flex-row justify-center'>
                {timesData.map((time, index) => (
                    <React.Fragment key={index}>
                        <p className='w-36'>{time.data.getFullYear()}, {time.data.getMonth()}</p>
                        {index < timesData.length - 1 && <div className='bg-secondary w-32 self-center'></div>}
                    </React.Fragment>
                ))}
            </div> */}
        </>
    )
}

export default TimeLine