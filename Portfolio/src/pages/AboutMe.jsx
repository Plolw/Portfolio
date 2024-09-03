import TimeLine from '../components/TimeLine';
import TimeCard from '../components/TimeCard';
import { useState } from 'react';

const AboutMe = () => {
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const times = [
        {
            prefix: "CubeMTLS/cube1", imgUrl: "AboutMeImages/cs50port.png", date: new Date(2022, 0, 25), desc: `I wanted to start learning how to code, 
            so I enrolled in CS50, a course offered by Harvard university that teaches the basics of computer science through a 
            10 week program. You end up knowing a fair bit of C and data structures, and html, css and Js for Web Development with Flask(Python) and SQLite3 as a backend.` },
        { prefix: "CubeMTLS/cube2", imgUrl: "AboutMeImages/cs50port.png", date: "", desc: "" },
        { prefix: "CubeMTLS/cube3", imgUrl: "AboutMeImages/cs50port.png", date: "", desc: "" },
        { prefix: "CubeMTLS/cube4", imgUrl: "AboutMeImages/cs50port.png", date: "", desc: "" },
        { prefix: "CubeMTLS/cube5", imgUrl: "AboutMeImages/cs50port.png", date: "", desc: "" }
    ]

    const [currentDate, setCurrentDate] = useState(times[0]);

    return (
        <div className='flex flex-col h-full 3xl:pt-14 gap-20 w-full'>
            <TimeCard timeData={currentDate} monthName={monthNames[currentDate.date.getMonth()]} />
            <TimeLine timesData={times} setCurrentDate={setCurrentDate} />
        </div>
    )
}

export default AboutMe