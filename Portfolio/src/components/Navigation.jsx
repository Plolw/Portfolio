import { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { styles } from '../style';
import { motion } from 'framer-motion';

export function Navigation({ links }) {
    const [show, setShow] = useState(false);
    const [hoveredCategory, setHoveredCategory] = useState(null);
    const toggle = () => setShow(!show);

    function NavLinks() {
        return <>
            {links.map((link) => (
                <a
                    key={link.id}
                    onMouseEnter={() => setHoveredCategory(link.id)}
                    onMouseLeave={() => setHoveredCategory(null)}
                    onClick={toggle}
                    className={`${styles.headerItem} relative`}
                    href={`#${link.id}`}
                >
                    {link.name}
                </a>
            ))}
        </>
    }

    return (
        <>
            <nav className='w-2/5 flex justify-end'>
                <div className='hidden w-full md:flex justify-between mb-3 p-10'>
                    <NavLinks />
                </div>
                <div className='md:hidden pt-10 mb-3'>
                    <button onClick={toggle}>
                        {show ? <IoClose className='size-8' /> : <IoMenu className='size-8' />}
                    </button>
                </div>
            </nav>
            {show && (
                <div className='md:hidden flex flex-col items-center basis-full pb-10'>
                    <NavLinks />
                </div>
            )}
        </>
    )
}