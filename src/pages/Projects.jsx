import ProjectCard from '../components/ProjectCard';
import { useMotionValue } from 'framer-motion';
import Cube from '../components/Cube';
import { useEffect, useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { projects } from '../info';

const Projects = () => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    const moveCursor = (e) => {
        cursorX.set(e.clientX - 12)
        cursorY.set(e.clientY - 12)
    }
    const [cursorIn, setCursorIn] = useState(false);
    const [collision, SetCollision] = useState(false);

    return (
        <div className='flex flex-col'>
            <SectionTitle text={"Projects"} />
            <div
                className='flex flex-col lg:grid grid-cols-8 gap-5 lg:gap-8 lg:p-4 lg:max-h-[80vh] 3xl:max-h-[76vh] overflow-y-auto lg:hide-scrollbar lg:px-16 2xl:px-20 3xl:px-10'
                onMouseMove={moveCursor}
                onMouseEnter={() => { setCursorIn(true) }}
                onMouseLeave={() => { setCursorIn(false) }}
                style={{ cursor: "none" }}
            >
                {projects.map((project, index) => {
                    return (
                        <ProjectCard
                            key={index}
                            projIndex={index}
                            imgUrl={project.url}
                            name={project.name}
                            desc={project.desc}
                            cols={project.cols}
                            OnMouseEnter={() => { SetCollision(true) }}
                            OnMouseLeave={() => { SetCollision(false) }}
                        />
                    );
                })}
                {cursorIn ? <Cube cursorX={cursorX} cursorY={cursorY} collision={collision} /> : <></>}
            </div>
        </div>
    )
}

export default Projects;
