import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from '../style';
import { onLoadVariant } from "../motion";

const SkillsTopBar = ({ skills, selectedCategory, setSelectedCategory }) => {
    const [hoveredCategory, setHoveredCategory] = useState(null);

    const skillCategories = Object.keys(skills);

    return (
        <motion.div
            className="relative flex flex-col items-center pt-5 md:pt-0 gap-4"
            onMouseLeave={() => setHoveredCategory(null)}
            variants={onLoadVariant(-50, 0, 0.1)}
            initial="hidden"
            whileInView="show"
        >
            <div className="flex flex-row justify-around md:justify-between md:pt-1 3xl:pt-10">
                {skillCategories.map((category, index) => (
                    <React.Fragment key={category}>
                        <button
                            className="relative lg:p-2 px-2 md:px-4 md:px-12 lg:px-16 2xl:px-24 3xl:px-28"
                            onMouseEnter={() => setHoveredCategory(category)}
                            onClick={() => setSelectedCategory(category)}
                        >
                            <p className={`text-sm md:text-lg 2xl:text-xl ${styles.descText} uppercase`}>{category}</p>
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
                        {index < skillCategories.length - 1 && <p className="mx-1 md:mx-4 lg::mx-10 self-center"> | </p>}
                    </React.Fragment>
                ))}
            </div>
            <div className="bg-primary w-11/12 md:w-10/12 lg:w-8/12 h-1 rounded-sm"></div>
        </motion.div>
    );
};

export default SkillsTopBar;