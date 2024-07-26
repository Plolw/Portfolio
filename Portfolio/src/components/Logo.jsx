import { Link } from "react-router-dom"

export function Logo() {
    return <Link to="/">
        <p className="text-3xl font-bold ml-8">WOR<span className="text-violet-800 font-bold">K</span>S</p>
    </Link>
}