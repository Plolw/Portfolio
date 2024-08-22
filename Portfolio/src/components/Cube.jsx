import { motion, useSpring } from 'framer-motion';

const Cube = ({ cursorX, cursorY }) => {
    const springConfig = { damping: 50, stiffness: 1000 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);


    return (
        <motion.div
            className="fixed top-0 left-0 w-12 h-12 pointer-events-none bg-primary rounded-md"
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
            }}
        />
    );
};

export default Cube;