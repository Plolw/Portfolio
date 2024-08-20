import React, { useState } from "react";
import { motion } from "framer-motion";

const SkillsTopBar = ({ skills, selectedCategory, setSelectedCategory }) => {
    const [hoveredCategory, setHoveredCategory] = useState(null);

    const skillCategories = Object.keys(skills);

    return (
        <div
            className="relative flex flex-col items-center gap-5"
            onMouseLeave={() => setHoveredCategory(null)}
        >
            <div className="flex flex-row justify-between">
                {skillCategories.map((category, index) => (
                    <React.Fragment key={category}>
                        <button
                            className="relative px-28 py-2"
                            onMouseEnter={() => setHoveredCategory(category)}
                            onClick={() => setSelectedCategory(category)}
                        >
                            <p>{category}</p>
                            {(hoveredCategory === category || (!hoveredCategory && selectedCategory === category)) && (
                                <motion.div
                                    layoutId="highlight"
                                    className="absolute top-0 left-0 right-0 bottom-0 bg-secondary bg-opacity-90 rounded-sm z-[-1]"
                                    initial={{ opacity: 1 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 23 }}
                                />
                            )}
                        </button>
                        {index < skillCategories.length - 1 && <p className="mx-10 self-center"> | </p>}
                    </React.Fragment>
                ))}
            </div>
            <div className="bg-primary w-10/12 h-1 rounded-sm"></div>
        </div>
    );
};

export default SkillsTopBar;