import React from 'react';
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { motion } from 'framer-motion';
import { IconContext } from "react-icons";

const DownArrow = () => {
    return (
        <motion.div
            initial={{ translate: "0px 0px" }}
            animate={{ translate: ["0px 30px", "0px 0px"] }}
            transition={{ duration: 0.6, repeat: Infinity }}
            className='self-center'
        >
            <IconContext.Provider value={{ color: "#007bff" }}>
                <MdKeyboardDoubleArrowDown />
            </IconContext.Provider>
        </motion.div>
    )
}

export default DownArrow