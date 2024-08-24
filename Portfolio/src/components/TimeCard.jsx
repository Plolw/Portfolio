import React from 'react';
import { styles } from '../style';

const TimeCard = ({ timeData }) => {
    return (
        <div className='flex flex-row justify-between h-3/5'>
            <div className='w-2/5 h-full'>
                <img className='w-full h-full' src={timeData.imgUrl || ''} />
            </div>
            <div className='w-3/5 flex flex-col justify-between'>
                <div className={`${styles.descText}`}>{timeData.date}</div>
                <div className={`${styles.smallHeaderText}`}>{timeData.desc}</div>
            </div>
        </div>
    )
}

export default TimeCard