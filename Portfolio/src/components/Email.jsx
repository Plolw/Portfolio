import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { styles } from '../style';
import { motion } from 'framer-motion';
import { onLoadVariant } from '../motion';

const Email = () => {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const [timer, setTimer] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();

        if (isDisabled) return; // Prevent form submission if disabled

        setIsSending(true);

        emailjs
            .sendForm('service_0hpk5en', 'template_sq00wrk', form.current, '26qC0gh5GAZL93s52')
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
                    console.log('FAILED...', error.text);
                    setIsSending(false);
                },
            );
    };

    useEffect(() => {
        return () => clearTimeout(timer);
    }, [timer]);

    return (
        <motion.form ref={form} onSubmit={sendEmail} className='flex flex-col gap-6 3xl:gap-10 p-3 md:p-6 2xl:p-10 rounded-sm bg-opacity-20 md:w-2/5 border-4 lg:border-8 border-primary'
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
                <textarea name="message" required disabled={isDisabled} className={`h-16 lg:h-28 3xl:h-44 ${styles.formInputText}`} />
            </div>
            <motion.button
                type="submit"
                disabled={isDisabled || isSending}
                className={`self-center md:self-end px-20 ${styles.normalButton}`}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95, rotate: "5deg", background: "#007bff" }}
                transition={{ duration: 0.1 }}
            >{isSending ? "Sending..." : isDisabled ? "Wait 1 minute..." : "Send"}</motion.button>
        </motion.form>
    );
};

export default Email;
