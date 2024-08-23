import React from "react";
import { styles } from "../style";
import { motion } from "framer-motion";
import { onLoadVariant } from "../motion";

const ProjectCard = ({ imgUrl, name, desc, cols, OnMouseEnter, OnMouseLeave }) => {
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
            <img src={imgUrl} className="object-cover w-full h-full rounded-md transition-opacity duration-500 ease-in-out group-hover:opacity-30" />
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0
             group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-1">
                <p className={`text-5xl font-semibold mb-2 p-10`}>{name}</p>
                <p className="text-md text-white p-10">{desc}</p>
            </div>
        </motion.div>
    )
}

export default ProjectCard;