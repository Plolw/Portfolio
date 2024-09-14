import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { styles } from '../style';
import { motion } from 'framer-motion';
import { onLoadVariant } from '../motion';

const Email = () => {
    const form = useRef();
    const em = useRef();
    const [isSending, setIsSending] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const [timer, setTimer] = useState(null);

    function Copy(e) {
        e.preventDefault();
        navigator.clipboard.writeText(em.current.innerText);
    }

    const sendEmail = (e) => {
        e.preventDefault();

        if (isDisabled) return; // Prevent form submission if disabled

        setIsSending(true);

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    console.log('SUCCESS!');
                    setIsSending(false);
                    setIsDisabled(true);

                    setTimer(setTimeout(() => {
                        setIsDisabled(false);
                    }, 60000));
                },
                (error) => {
                    console.log(import.meta.env.VITE_EMAILJS_SERVICE_ID);
                    console.log(import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
                    console.log(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
                    console.log('FAILED...', error.text);
                    setIsSending(false);
                },
            );
    };

    useEffect(() => {
        return () => clearTimeout(timer);
    }, [timer]);

    return (
        <motion.form ref={form} onSubmit={sendEmail} className='flex flex-col gap-4 3xl:gap-8 p-3 md:p-6 2xl:p-10 rounded-sm bg-opacity-20 md:w-3/5 lg:w-2/5 border-4 lg:border-8 border-primary'
            variants={onLoadVariant(50, 0.5)} initial="hidden" whileInView="show"
        >
            <p className='text-2xl 2xl:text-3xl 3xl:text-4xl'>Send me a <span className='text-primary'>message!</span></p>
            <div className='flex flex-col gap-2 w-full'>
                <label className={`${styles.label}`}>Name</label>
                <input type="text" name="user_name" required disabled={isDisabled} className={`${styles.formInputText}`} />
            </div>
            <div className='flex flex-col gap-2 w-full'>
                <label className={`${styles.label}`}>Email</label>
                <input type="email" name="user_email" required disabled={isDisabled} className={`${styles.formInputText}`} />
            </div>
            <div className='flex flex-col gap-2 w-full'>
                <label className={`${styles.label}`}>Message</label>
                <textarea name="message" required disabled={isDisabled} className={`h-16 lg:h-20 3xl:h-36 ${styles.formInputText}`} />
            </div>
            <p className='text-sm text-primary'>Or if you want to send an email directly: <a href="" ref={em} onClick={Copy} title='Click to copy!'>polpolortiz@gmail.com</a></p>
            <div className='self-end flex flex-row gap-3'>
                {isDisabled && <p className='text-sm self-center text-gray-400'>Email sent! Wait 1 minute to send another one.</p>}
                <motion.button
                    type="submit"
                    disabled={isDisabled || isSending}
                    className={`self-center md:self-end px-20 ${styles.normalButton}`}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95, rotate: "5deg", background: "#007bff" }}
                    transition={{ duration: 0.1 }}
                >{isSending ? "Sending..." : isDisabled ? "Wait 1 minute..." : "Send"}</motion.button>
            </div>
        </motion.form>
    );
};

export default Email;
