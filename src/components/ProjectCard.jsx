import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { onLoadVariant } from "../motion";

const ProjectCard = ({ imgUrl, name, desc, cols, OnMouseEnter, OnMouseLeave, projIndex }) => {
    return (
        <motion.div
            className={`relative group overflow-hidden origin-center`}
            style={{ gridColumn: `span ${cols} / span ${cols}` }}
            onMouseEnter={OnMouseEnter}
            onMouseLeave={OnMouseLeave}
            variants={onLoadVariant(0, -50)}
            initial="hidden"
            whileInView="show"
        >
            <Link to={`/project/${projIndex}`} className="block w-full h-full">
                <img src={imgUrl} className="object-cover w-full h-full rounded-md transition-opacity duration-500 ease-in-out group-hover:opacity-30" />
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-1">
                    <p className="text-2xl lg:text-3xl 2xl:text-5xl font-semibold 2xl:mb-2 lg:p-4 xl:p-10">{name}</p>
                    <p className="text-sm xl:text-md text-white p-4 2xl:p-10">{desc}</p>
                </div>
            </Link>
        </motion.div>
    );
};

export default ProjectCard;
