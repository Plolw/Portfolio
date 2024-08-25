import ProjectCard from '../components/ProjectCard';
import { useMotionValue } from 'framer-motion';
import Cube from '../components/Cube';
import { useEffect, useState } from 'react';

const Projects = () => {

    const projects = [
        { url: "ProjectsImages/Grades/Grades2.PNG", name: "GrAdes", desc: "A website to store and manage your grades.", cols: 4 },
        { url: "ProjectsImages/Kegel/Kegel.png", name: "Kegel", desc: "A 2D platformer videogame made with a team of people (in progress).", cols: 4 },
        { url: "ProjectsImages/E-Commerce/Ecommerce.PNG", name: "E-Commerce", desc: "Simple e-commerce website to practice secure crud operations.", cols: 2 },
        { url: "ProjectsImages/Social/Social.PNG", name: "Social Network", desc: "A social network where users can publish messages, follow and like each other.", cols: 2 },
        { url: "ProjectsImages/Works/works1.PNG", name: "Works", desc: "Website to create your workouts and store your progress (possibly upgrading to a social network soon).", cols: 4 },
        { url: "ProjectsImages/Trello/trello.PNG", name: "Trello-like website", desc: "Just like Trello, it allows you to create projects and manage tasks inside of them with your colleagues.", cols: 3 },
        { url: "ProjectsImages/E-mail/Email.PNG", name: "E-mail", desc: "A simple email service.", cols: 2 },
        { url: "ProjectsImages/TRC/TRC.PNG", name: "The random color", desc: "Webapp to gain colors inspiration for your projects.", cols: 3 }
    ];

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    const moveCursor = (e) => {
        cursorX.set(e.clientX - 12)
        cursorY.set(e.clientY - 12)
    }
    const [cursorIn, setCursorIn] = useState(false);
    const [collision, SetCollision] = useState(false);

    return (
        <>
            <div
                className='grid grid-cols-8 gap-8 p-4 max-h-[80vh] overflow-y-auto hide-scrollbar px-16 2xl:px-20'
                onMouseMove={moveCursor}
                onMouseEnter={() => { setCursorIn(true) }}
                onMouseLeave={() => { setCursorIn(false) }}
                style={{ cursor: "none" }}
            >
                {projects.map((project, index) => {
                    return (
                        <ProjectCard
                            key={index}
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
        </>
    )
}

export default Projects;
