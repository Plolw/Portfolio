import { useState } from 'react';
import { IoMenu, IoClose } from "react-icons/io5";
import { motion } from 'framer-motion';

export function Navigation({ links }) {
    const [show, setShow] = useState(false);
    const toggle = () => setShow(!show);

    function NavLinks() {
        const [hoveredCategory, setHoveredCategory] = useState(null);

        return (
            <>
                {links.map((link) => (
                    <div key={link.id} className="relative">
                        <a
                            onMouseEnter={() => setHoveredCategory(link.id)}
                            onMouseLeave={() => setHoveredCategory(null)}
                            onClick={toggle}
                            className={`text-md lg:text-lg relative z-10`}
                            href={`#${link.id}`}
                        >
                            {link.name}
                        </a>
                        {hoveredCategory === link.id && (
                            <motion.div
                                className="absolute -left-2 bottom-3 bg-secondary z-0 w-24 h-1"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ type: "spring", stiffness: 300, damping: 23 }}
                            />
                        )}
                    </div>
                ))}
            </>
        );
    }

    return (
        <>
            <nav className='w-2/5 flex justify-end'>
                <div className='hidden w-full md:flex justify-between 2xl:mb-3 p-5 2xl:p-8'>
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
