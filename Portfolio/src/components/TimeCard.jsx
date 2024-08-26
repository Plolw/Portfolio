import React from 'react';
import { styles } from '../style';

const TimeCard = ({ timeData }) => {
    return (
        <div className='flex flex-row 3xl:h-4/12 gap-10'>
            <div className='w-2/5 h-full'>
                <img className='w-full h-full object-cover rounded-sm border-primary border-4' src={timeData.imgUrl} />
            </div>
            <div className='w-3/5 flex flex-col justify-around'>
                <div className={`${styles.descText}`}>{timeData.date}</div>
                <div className={`${styles.smallHeaderText}`}>{timeData.desc}</div>
            </div>
        </div>
    )
}

export default TimeCard