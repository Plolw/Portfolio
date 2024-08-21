import React from "react";

const ProjectCard = ({ imgUrl, name, desc }) => {
    return (
        <div className="w-full h-full relative group overflow-hidden">
            <img src={imgUrl} className="w-full h-full rounded-md transition-opacity duration-500 ease-in-out group-hover:opacity-60" />
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-10">
                <p className="text-xl font-bold text-white mb-2">{name}</p>
                <p className="text-md text-white">{desc}</p>
            </div>
        </div>
    )
}

export default ProjectCard;