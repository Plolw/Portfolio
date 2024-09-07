import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectPage = () => {

       
    const { proj } = useParams();

    return (
        <div>ProjectPage</div>
    )
}

export default ProjectPage