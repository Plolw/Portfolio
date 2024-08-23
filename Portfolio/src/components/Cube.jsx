import { motion, useSpring } from 'framer-motion';

const Cube = ({ cursorX, cursorY, collision }) => {
    const springConfig = { damping: 50, stiffness: 1000 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);


    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none bg-primary rounded-sm"
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
                width: collision ? '1.5rem' : '4rem',
                height: collision ? '1.5rem' : '4rem',
            }}
            layout
        />
    );
};

export default Cube;