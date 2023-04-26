import { Link } from 'react-router-dom'

export default function Header() {
    return(
        <nav>
            <Link to="/">home</Link>
            {" | "}
            <Link to="/about">about</Link>
            {" | "}
            <Link to="/blog">blog</Link>
            {" | "}
            <Link to="/projects">projects</Link>
        </nav>
    )
}