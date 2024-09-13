export const projects = [
    {
        url: "ProjectsImages/Works/works1.PNG", name: "Works", desc: "Website to create your workouts and store your progress (possibly upgrading to a social network soon).", cols: 4,
        imgPrefix: "/ProjectsImages/Works/Works", stack: "DjangoRestFramework, SQLite3 (for testing), PostgreSQL (for deployment), React, Tailwind, Railway (for deployment), Vercel(for deployment), Git",
        learnings: `This was the final project for CS50Web so I used the technologies I learned there. While doing this project I learned a lot of about comunication between a database,
        a backend and a frontend using an API. Meanwhile ovbiously learning to manage secure CRUD operations using HTTPS requests with CORS headers to identify users and validate the requests.
        I also implemented a user management system so that everyone can keep their workouts to themselves.`,
        githubLink: "", websiteLink: ""
    },
    {
        url: "ProjectsImages/Kegel/kegle1.PNG", name: "Kegle", desc: "A 2D platformer videogame made with a team of people (in progress).", cols: 4,
        imgPrefix: "/ProjectsImages/Kegel/kegle", stack: "Unity, C#, Aseprite, Photoshop, Git", learnings: `Since Kegle is being made with a team of people I'm learning a lot about managing projects
        that involve more than one person. This applies on a more social level of managing the comunications with the team and the workload, and on a more 
        technichal level of sharing all the code and files, wichhas lead to learning to use Git in a real world situation. \n Since the game incorporates a complex inventory sistem made from scratch (crafting items, 
        upgradable weapons, etc), I have learned a lot about data structures and OOP.`, githubLink: "", websiteLink: ""
    },
    {
        url: "ProjectsImages/E-Commerce/Ecommerce1.PNG", name: "E-Commerce", desc: "Simple e-commerce website to practice secure crud operations.", cols: 2,
        imgPrefix: "/ProjectsImages/E-Commerce/Ecommerce", stack: "HTML, CSS, JavaScript, Django, SQLite3", learnings: `As one of my first dinamic websites (made as a project for CS50Web), this project helped me
        learn a lot about JavaScript and comunications from a frontend to a backend with an API.`, githubLink: "", websiteLink: ""
    },
    {
        url: "ProjectsImages/Social/Social1.PNG", name: "Social Network", desc: "A social network where users can publish messages, follow and like each other.", cols: 2,
        imgPrefix: "/ProjectsImages/Social/Social", stack: "HTML, CSS, JavaScript, Django, SQLite3", learnings: `Learned a lot about CRUD operations and user management. Since it is a social network users must be
        able to create accounts and login to them. Also learned about password security and secure HTTPS requests.`,
        githubLink: "", websiteLink: ""
    },
    {
        url: "ProjectsImages/Grades/Grades1.PNG", name: "GrAdes", desc: "A website to store and manage your grades.", cols: 4,
        imgPrefix: "/ProjectsImages/Grades/Grades", stack: "Django, HTML, CSS, JavaScript, SQLite3", learnings: `This website was the final project to the CS50 course. I learned a lot about web development and how
        browsers work with dinamic and static websites, CRUD opeartions and user management.`, githubLink: "", websiteLink: ""
    },
    {
        url: "ProjectsImages/Trello/trel1.PNG", name: "Trello-like website", desc: "Just like Trello, it allows you to create projects and manage tasks inside of them with your colleagues.", cols: 3,
        imgPrefix: "/ProjectsImages/Trello/trel", stack: "DjangoRestFramework, Angular, Tailwind, SQLite3 (for testing), MySQL (for deployment), Chart.js", learnings: `This was my first freelance work for a client.
        I learned a lot about comunication with clients and setting up a project based on my client's needs. On a technichal side I learned Angular, more advanced user management (cookies, localStorage, sessions, etc)
        , agile methodologies and advanced data visualization (creating custom graphs without frameworks, special mention to a Gantt graph).`, githubLink: "", websiteLink: ""
    },
    {
        url: "ProjectsImages/E-mail/Email1.PNG", name: "E-mail", desc: "A simple email service.", cols: 2,
        imgPrefix: "/ProjectsImages/E-mail/Email", stack: "HTML, CSS, JavaScript, Django, SQLite3", learnings: `This isn't a real email, just a messaging service with emails being the 'user_id'. As one of the firsts
        projects from CS50Web I learned a lot about JavaScriptm, HTML and CRUD operations with and API and a database.`, githubLink: "", websiteLink: ""
    },
    {
        url: "ProjectsImages/TRC/TRC1.PNG", name: "The random color", desc: "Webapp to gain colors inspiration for your projects.", cols: 3,
        imgPrefix: "/ProjectsImages/TRC/TRC", stack: "Next.js, Vercel, Vercel Analytics, Tailwind", learnings: `A website where you can click the screen to change the color. Originally made with the idea of getting high
        page views and adding adds to the website. To make the high page views the idea is to learn about SEO, still a work in progress although you can visit the webpage if you want!`, githubLink: "",
        websiteLink: "https://www.therandomcolor.com/"
    }
];

export const skillsData = {
    Web: [{ "Angular": 65 }, { "SQLite3": 80 }, { "MySQL": 65 }, { "Flask": 60 }, { "Django": 85 }, { "React": 80 }, { "NextJs": 75 }, { "Tailwind": 70 }, { "Chart.js": 80 }],
    Game: [{ "Unity": 60 }, { "C++": 45 }, { "C#": 70 }, { "Unreal Engine 4": 40 }],
    Design: [{ "Photoshop": 60 }, { "Figma": 65 }, { "UX/UI": 70 }, { "3ds Max": 45 }, { "Blender": 30 }],
    Data: [{ "R": 70 }, { "Python": 80 }, { "NumPy": 90 }, { "Pandas": 90 }, { "TidyVerse": 70 }, { "Statistics": 85 }, { "Maths": 85 }, { "SQLite3": 80 }, { "MySQL": 65 }],
};

export const times = [
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
        title: "Freelance", prefix: "CubeMTLS/cube5", imgUrl: "ProjectsImages/Trello/trel1.PNG", dateS: new Date(2024, 2, 4), dateF: new Date(2024, 3, 2), desc: `Made my first freelance website for a client. It's a 
        very similar concept to Trello, a project management app. It incorporates agile methodologies and data visualization for users to see their advancement on their projects. Made 
        with DRF as a backend api connected to a MySQL local database, with an Angular frontend.` }
];

export const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];