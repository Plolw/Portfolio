import React from 'react';
import { styles } from '../style';

const SectionTitle = ({ text }) => {
    return (
        <div className='relative md:w-2/5 lg:pl-36 justify-center pb-2 lg:pb-4'>
            <p className={`text-left px-8 ${styles.headerText}`}>{text}</p>
            <div className='absolute bottom-5 2xl:bottom-8 3xl:bottom-10 w-96 h-1 lg:h-2 bg-primary self-center z-[-1]'></div>
        </div>
    )
}

export default SectionTitle