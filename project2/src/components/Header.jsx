import globe from "../assets/globe-icon.png"
import "../journal-style.css"

export default function Header() {
    return (
        <header className="travel-header">
            <img src={globe} alt="Globe Icon" />
            <span>my travel journal.</span>
        </header>
    )
}