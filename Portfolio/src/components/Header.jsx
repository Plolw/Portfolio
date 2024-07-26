import { Logo } from "./Logo";
import { Navigation } from "./Navigation";

export function Header() {
    return (
        <header className="sticky top-0 z-[1] mx-auto  flex w-full flex-wrap 
        items-center justify-end bg-gradient-to-b from-bgcolor from-50% via-bgcolor via-65% to-transparent to-100%">
            <Navigation />
        </header>
    )
}