import React from 'react'
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    const projects = [
        { url: "ProjectsImages/Grades/Grades.PNG", name: "GrAdes", desc: "A website to store and manage your grades." },
        { url: "ProjectsImages/Kegel/Kegel.png", name: "Kegel", desc: "A 2D platformer videogame made with a team of people (in progress)." },
        { url: "ProjectsImages/E-Commerce/Ecommerce.PNG", name: "E-Commerce", desc: "Simple e-commerce website to practice payments and secure crud operations." },
        { url: "ProjectsImages/Social/Social.PNG", name: "Social Network", desc: "A social network where users can publish messages, follow and like each other." },
        { url: "ProjectsImages/Works/works1.PNG", name: "Works", desc: "Website to create your workouts and store your progress (possibly upgrading to a social network soon)." },
        { url: "ProjectsImages/Trello/trello.PNG", name: "Trello-like website", desc: "Just like Trello, it allows you to create projects and manage tasks inside of them with your colleagues." },
        { url: "ProjectsImages/E-mail/Email.PNG", name: "E-mail", desc: "A simple email service." },
        { url: "ProjectsImages/TRC/TRC.PNG", name: "The random color", desc: "Webapp to gain colors inspiration for your projects." }
    ]
    return (
        <div className='grid grid-cols-2 gap-1 p-4 max-h-[80vh] overflow-y-auto hide-scrollbar'>
            {projects.map((project) => (
                <ProjectCard imgUrl={project.url} name={project.name} desc={project.desc} />
            ))}
        </div>
    )
}

export default Projects