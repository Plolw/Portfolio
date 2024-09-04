import React from 'react';
import { styles } from '../style';
import { onLoadVariant } from '../motion';
import { motion } from 'framer-motion';

const TimeCard = ({ timeData, monthName, monthName2 }) => {
    return (
        <div className='flex flex-col md:flex-row 3xl:h-4/12 gap-10 justify-center'>
            <motion.div className='md:w-4/12 h-full self-center' variants={onLoadVariant(0, -50, 0.2)} initial="hidden" whileInView="show" >
                <img className='w-full h-full object-cover rounded-sm border-primary border-4' src={timeData.imgUrl} />
            </motion.div>
            <motion.div className='md:w-6/12 flex flex-col justify-around self-center gap-3 md:gap-5 lg:gap-8' variants={onLoadVariant(-50, 0, 0.2)} initial="hidden" whileInView="show" >
                <div>
                    <p className="text-2xl md:text-4xl lg:text-5xl 3xl:text-6xl">{timeData.title}</p>
                </div>
                <div>
                    <div className={`text-lg 3xl:text-xl ${styles.descText}`}><span className='text-sectext text-sm 2xl:text-lg pr-2 2xl:pr-5'>Start Date:</span>{monthName}, {timeData.dateS.getDate()}, {timeData.dateS.getFullYear()}</div>
                    <div className={`text-lg 3xl:text-xl ${styles.descText}`}><span className='text-sectext text-sm 2xl:text-lg pr-2 2xl:pr-5'>Finish Date:</span>{monthName2}, {timeData.dateF.getDate()}, {timeData.dateF.getFullYear()}</div>
                </div>
                <div className={`${styles.smallHeaderText}`}>{timeData.desc}</div>
            </motion.div>
        </div>
    )
}

export default TimeCard