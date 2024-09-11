import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../info';
import { styles } from '../style';

const ProjectPage = () => {
    const { index } = useParams();
    return (
        <div className='flex flex-col relative z-10 w-full gap-20'>
            <div className='flex flex-row gap-16'>
                <img className='w-5/12 object-cover rounded-sm border-4 border-primary' src={`/${projects[index].url}`} />
                <div className='flex flex-col gap-10'>
                    <p className={`px-0 ${styles.headerText}`}>{projects[index].name}</p>
                    <p className={`${styles.smallHeaderText}`}>{projects[index].desc}</p>
                    <p className='text-xl'><span className='pr-6 tracking-wider'>Tech Stack: </span>{projects[index].stack}</p>
                    <p className='text-xl'>{projects[index].learnings}</p>
                </div>
            </div>
            <div className='flex flex-row gap-24'>
                <img className='w-5/12 rounded-sm border-2 border-primary' src={`${projects[index].imgPrefix}2.PNG`} />
                <img className='w-5/12 rounded-sm border-2 border-primary' src={`${projects[index].imgPrefix}3.PNG`} />
            </div>
        </div>
    )
}

export default ProjectPage