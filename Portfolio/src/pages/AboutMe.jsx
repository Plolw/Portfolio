import TimeLine from '../components/TimeLine';
import TimeCard from '../components/TimeCard';
import { useState } from 'react';

const AboutMe = () => {
    const times = [
        { imgUrl: "/AboutMeImages/", date: "", desc: "" },
        { imgUrl: "/AboutMeImages/", date: "", desc: "" },
        { imgUrl: "/AboutMeImages/", date: "", desc: "" },
        { imgUrl: "/AboutMeImages/", date: "", desc: "" },
        { imgUrl: "/AboutMeImages/", date: "", desc: "" }
    ]

    const [currentDate, setCurrentDate] = useState(times[0]);

    return (
        <div className='flex flex-col h-full'>
            <TimeCard timeData={currentDate} />
            <TimeLine timesData={times} setCurrentDate={setCurrentDate} />
        </div>
    )
}

export default AboutMe