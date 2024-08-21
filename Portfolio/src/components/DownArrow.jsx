import React from 'react';
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { motion } from 'framer-motion';
import { IconContext } from "react-icons";

const DownArrow = () => {
    return (
        <motion.div
            initial={{ translate: "0px 0px" }}
            animate={{ translate: ["0px 40px", "0px 0px"] }}
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.6 }}
            className='self-center pt-10'
        >
            <IconContext.Provider value={{ color: "#007bff" }}>
                <MdKeyboardDoubleArrowDown className='size-20' />
            </IconContext.Provider>
        </motion.div>
    )
}

export default DownArrow