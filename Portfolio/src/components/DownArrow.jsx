import React from 'react';
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { motion } from 'framer-motion';
import { IconContext } from "react-icons";

const DownArrow = () => {
    return (
        <motion.div
            initial={{ translate: "0px 0px" }}
            animate={{ translate: ["0px 30px", "0px 0px"] }}
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.6 }}
            className='hidden lg:flex self-center 2xl:pt-6 3xl:pt-16'
        >
            <IconContext.Provider value={{ color: "#007bff" }}>
                <MdKeyboardDoubleArrowDown className='size-16 2xl:size-20' />
            </IconContext.Provider>
        </motion.div>
    )
}

export default DownArrow