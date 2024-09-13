import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../info';
import { styles } from '../style';

const ProjectPage = () => {
    const { index } = useParams();
    return (
        <div className='flex flex-col relative z-10 w-full gap-20 pb-10'>
            <div className='flex flex-col lg:flex-row gap-16'>
                <img className='w-full lg:w-5/12 object-cover rounded-sm border-4 border-primary' src={`/${projects[index].url}`} />
                <div className='flex flex-col gap-10'>
                    <p className={`text-3xl ${styles.headerText}`}>{projects[index].name}</p>
                    <p className={`${styles.smallHeaderText}`}>{projects[index].desc}</p>
                    <p className='text-md lg:text-lg 2xl:text-xl text-sectext'><span className='pr-6 tracking-wider font-semibold text-primary'>Tech Stack: </span>{projects[index].stack}</p>
                    <p className='text-md lg:text-lg 2xl:text-xl'>{projects[index].learnings}</p>
                    {projects[index].websiteLink != "" && <div><a href={projects[index].websiteLink} className='transition hover:text-primary'>{projects[index].websiteLink}</a></div>}
                    {projects[index].githubLink != "" && <div><a href={projects[index].githubLink} className='transition hover:text-primary'>{projects[index].githubLink}</a></div>}
                </div>
            </div>
            <div className='flex flex-col lg:flex-row gap-5 lg:gap-24'>
                <img className='w-full lg:w-5/12 rounded-sm border-2 border-primary' src={`${projects[index].imgPrefix}2.PNG`} />
                <img className='w-full lg:w-5/12 rounded-sm border-2 border-primary' src={`${projects[index].imgPrefix}3.PNG`} />
            </div>
        </div>
    )
}

export default ProjectPage