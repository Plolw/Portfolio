import React from 'react';
import { VscGithubInverted } from "react-icons/vsc";
import { FaInstagram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { motion } from 'framer-motion';
import { onLoadVariant } from '../motion';

const Socials = () => {
    return (
        <motion.div className='flex flex-col gap-2 lg:gap-4 3xl:gap-6' variants={onLoadVariant(50)} initial="hidden" whileInView="show">
            <p className='self-center text-2xl uppercase border-b-4 border-primary px-20'>My Socials</p>
            <div className='flex flex-row gap-4 lg:gap-8 3xl:gap-10 self-center'>
                <motion.div
                    initial={{ translate: "0px 0px" }}
                    whileHover={{ translate: "0px -10px" }}
                    transition={{ duration: 0.3 }}
                    className='transition hover:bg-primary p-2 rounded-md'
                >
                    <a href='https://github.com/Plolw'><VscGithubInverted className='size-8 md:size-10 2xl:size-14 3xl:size-16' /></a>
                </motion.div>
                <motion.div
                    initial={{ translate: "0px 0px" }}
                    whileHover={{ translate: "0px -10px" }}
                    transition={{ duration: 0.3 }}
                    className='transition hover:bg-primary p-2 rounded-md'
                >
                    <a href='https://www.instagram.com/polortizz_/'><FaInstagram className='size-8 md:size-10 2xl:size-14 3xl:size-16' /></a>
                </motion.div>
                <motion.div
                    initial={{ translate: "0px 0px" }}
                    whileHover={{ translate: "0px -10px" }}
                    transition={{ duration: 0.3 }}
                    className='transition hover:bg-primary p-2 rounded-md'
                >
                    <a href=''><FaDiscord className='size-8 md:size-10 2xl:size-14 3xl:size-16' /></a>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Socials