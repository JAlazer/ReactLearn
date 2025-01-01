/**
 * Challenge:
 * 
 * Match the style given from Bob Ziroll's design
 * 
 * Hints:
 * - render a header with a nav; the image and "ReactFacts" are inside the nav
 * -
 */

// import react logo
import reactLogo from "../assets/react.svg"
import "../ReactFactStyle.css"

export default function Navbar() {
    return (
        <header className="nav-bar-head">
            <nav className="nav-bar-navigation">
                <img src={reactLogo} className="nav-bar-img" alt="React Logo" />
                <span className="nav-bar-title">ReactFacts</span>
            </nav>
        </header>
    )
}