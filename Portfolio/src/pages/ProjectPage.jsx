import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../info';

const ProjectPage = () => {

       
    const { index } = useParams();

    return (
        <div>
            <p>{projects[index].name}</p>
        </div>
    )
}

export default ProjectPage