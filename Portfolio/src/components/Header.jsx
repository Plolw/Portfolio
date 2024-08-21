import { Navigation } from "./Navigation";

export function Header() {
    const links = [
        { name: "Home", id: "home" },
        { name: "Skills", id: "skills" },
        { name: "Projects", id: "projects" },
        { name: "About", id: "about" },
        { name: "Contact", id: "contact" },
    ]

    return (
        <header className="sticky top-0 z-20 mx-auto  flex w-full flex-wrap 
        items-center justify-end bg-gradient-to-b from-bgcolor from-50% via-bgcolor via-65% to-transparent to-100%">
            <Navigation links={links} />
        </header>
    )
}