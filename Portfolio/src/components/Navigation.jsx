import { Link } from 'react-router-dom';
import { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { styles } from '../style';


export function Navigation() {
    const [show, setShow] = useState(false);
    const toggle = () => setShow(!show);

    function NavLinks() {
        return <>
            <Link onClick={toggle} className={`${styles.headerItem}`} to="/settings">Home</Link>
            <Link onClick={toggle} className={`${styles.headerItem}`} to="/workouts">Skills</Link>
            <Link onClick={toggle} className={`${styles.headerItem}`} to="/">Projects</Link>
            <Link onClick={toggle} className={`${styles.headerItem}`} to="/">About me</Link>
            <Link onClick={toggle} className={`${styles.headerItem}`} to="/">Contact</Link>
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