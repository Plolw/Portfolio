export const onLoadVariant = (initialY, initialX, delay) => {
    return {
        hidden: {
            y: initialY,
            x: initialX,
            opacity: 0,
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 0.75,
                delay: delay || 0,
            },
        },
    };
};