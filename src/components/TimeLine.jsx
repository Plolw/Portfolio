import React from 'react';
import TimeCubeCanvas from './TimeCubeCanvas';
import { motion } from 'framer-motion';
import { onLoadVariant } from '../motion';


const TimeLine = ({ timesData, setCurrentDate }) => {
    return (
        <motion.div className='flex flex-col' variants={onLoadVariant(0, 50, 0.3)} initial="hidden" whileInView="show">
            <div className='flex flex-row md:justify-center overflow-x-auto'>
                {timesData.map((time, index) => (
                    <React.Fragment key={index}>
                        <TimeCubeCanvas time={time} setCurrentDate={setCurrentDate} />
                        {index < timesData.length - 1 && <div className='bg-secondary md:w-24 2xl:w-32 h-1 self-center'></div>}
                    </React.Fragment>
                ))}
            </div>
            <div className='hidden md:flex flex-row justify-center text-center'>
                {timesData.map((time, index) => (
                    <React.Fragment key={index}>
                        <p className='w-36 text-sectext text-center'>{time.dateS.getFullYear()}/{time.dateS.getMonth()}</p>
                        {index < timesData.length - 1 && <div className='bg-secondary md:w-24 2xl:w-32 self-center'></div>}
                    </React.Fragment>
                ))}
            </div>
        </motion.div>
    )
}

export default TimeLine