import React from 'react';
import { styles } from '../style';
import { onLoadVariant } from '../motion';
import { motion } from 'framer-motion';

const TimeCard = ({ timeData, monthName }) => {
    return (
        <div className='flex flex-row 3xl:h-4/12 gap-10'>
            <motion.div className='w-2/5 h-full' variants={onLoadVariant(0, -50)} initial="hidden" whileInView="show" >
                <img className='w-full h-full object-cover rounded-sm border-primary border-4' src={timeData.imgUrl} />
            </motion.div>
            <motion.div className='w-3/5 flex flex-col justify-around' variants={onLoadVariant(-50)} initial="hidden" whileInView="show" >
                <div className={`${styles.descText}`}>{monthName}, {timeData.date.getFullYear()}</div>
                <div className={`${styles.smallHeaderText}`}>{timeData.desc}</div>
            </motion.div>
        </div>
    )
}

export default TimeCard