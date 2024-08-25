import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { styles } from "../style";

const SkillImage = ({ skill }) => {
    const [name, mastery] = Object.entries(skill)[0];
    const controls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById(name);
            if (element) {
                const rect = element.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
                if (isVisible) {
                    controls.start({ width: `${mastery}%` });
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [controls, mastery, name]);

    return (
        <div id={name} className="flex flex-row items-center w-full md:w-4/6 mb-2">
            <p className={`text-sm md:text-md lg:text-lg 2xl:text-xl 3xl:text-2xl ${styles.descText} w-4/12 md:w-2/12 text-left`}>{name}</p>
            <div className="bg-sectext h-3 w-full rounded-sm">
                <motion.div
                    className="bg-primary h-3 rounded-sm"
                    style={{ width: "0%" }}
                    animate={controls}
                    initial={{ width: "0%" }}
                    transition={{ duration: 0.3 }}
                ></motion.div>
            </div>
        </div>
    );
};

export default SkillImage;