import TimeLine from '../components/TimeLine';
import TimeCard from '../components/TimeCard';
import { useState } from 'react';
import SectionTitle from '../components/SectionTitle';

const AboutMe = () => {
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const times = [
        {
            title: "CS50", prefix: "CubeMTLS/cube1", imgUrl: "AboutMeImages/cs50port.png", dateS: new Date(2022, 7, 25), dateF: new Date(2022, 11, 22), desc: `I wanted to start learning how to code, 
            so I enrolled in CS50, a course offered by Harvard university that teaches the basics of computer science through a 
            10 week program. You end up knowing a fair bit of C and data structures, and html, css and Js for Web Development with Flask(Python) and SQLite3 as a backend.` },
        {
            title: "Multimedia", prefix: "CubeMTLS/cube2", imgUrl: "AboutMeImages/upc.jpg", dateS: new Date(2022, 8, 16), dateF: new Date(2023, 5, 21), desc: `Started a Digital Design and Multimedia 
            Technologies college degree at UPC (Universitat Politècnica de Catalunya), where I completed the first year. I learned a lot about design, UX/UI and 3d modeling.
            Changed degrees to learn more technichal skills in uni while practicing creative work on my own.` },
        {
            title: "CS50 Web", prefix: "CubeMTLS/cube3", imgUrl: "AboutMeImages/CS50w.png", dateS: new Date(2023, 7, 20), dateF: new Date(2024, 1, 27), desc: `Decided to enroll in CS50 Web, a follow up
            course to CS50 where you emphazise on web development. I learned Django and SQLite3 as a back-end, React as a front-end (obviously improving my HTML, CSS and JS skills on the way)
            , Git to manage coding projects, CI/CD, Networking Protocols, and general knowledge on how to do professional web applications.` },
        {
            title: "Statistics", prefix: "CubeMTLS/cube4", imgUrl: "AboutMeImages/uab.jpg", dateS: new Date(2023, 8, 12), dateF: new Date(2000, 0, 1), desc: `Started an Applied Statistics college degree at UAB 
            (Universitat Autònoma de Catalunya). Here I am learning mathematics, data science and programing. Currenly still studying this degree.` },
        {
            title: "Freelance", prefix: "CubeMTLS/cube5", imgUrl: "AboutMeImages/webpagetr.png", dateS: new Date(2024, 2, 4), dateF: new Date(2024, 3, 2), desc: `Made my first freelance website for a client. It's a 
            very similar concept to Trello, a project management app. It incorporates agile methodologies and data visualization for users to see their advancement on their projects. Made 
            with DRF as a backend api connected to a MySQL local database, with an Angular frontend.` }
    ]

    const [currentDate, setCurrentDate] = useState(times[0]);

    return (
        <div className='flex flex-col pt-20 lg:pt-0 min-h-[100vh]'>
            <SectionTitle text={"About Me"} />
            <div className='flex flex-col h-full 3xl:pt-14 gap-10 md:gap-20 w-full'>
                <TimeCard timeData={currentDate} monthName={monthNames[currentDate.dateS.getMonth()]} monthName2={monthNames[currentDate.dateF.getMonth()]} />
                <TimeLine timesData={times} setCurrentDate={setCurrentDate} />
            </div>
        </div>
    )
}

export default AboutMe