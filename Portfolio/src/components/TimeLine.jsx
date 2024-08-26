import React from 'react'


const TimeUnit = ({ time, setCurrentDate }) => {
    return (
        <div>
            <div className='flex flex-row items-center'>
                <button
                    className='w-16 h-16 rounded-sm bg-primary border-2 border-white-100'
                    onClick={() => setCurrentDate(time)}
                >{time}</button>
                <div className='bg-secondary w-24 h-1'></div>
            </div>
        </div>
    )
}


const TimeLine = ({ timesData, setCurrentDate }) => {
    return (
        <div className='flex flex-row w-full'>
            {timesData.map((time, index) => (
                <TimeUnit TimeSection={time} setCurrentDate={setCurrentDate} key={index} />
            ))}
        </div>
    )
}

export default TimeLine