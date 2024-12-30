/**
 * Challenge: Starting from scratch, build and render the 
 * HTML for our section project. Check the Google slide for
 * what you're trying to build.
 * 
 * adding styling later
 * 
 * Hints:
 * set width attribute of the image element just like in HTML. In the slide, it is set to 40px
 */

import { createRoot } from "react-dom/client"
import reactLogo from './assets/react.svg'

// now to add styling!
import "./ReactFactStyle.css"

// adding components!
import Header from "./Header"

const root = createRoot(document.getElementById("root"))

root.render(
    <main>
        <img src={reactLogo} className="logo react" alt="React logo" width="40px" />
        <h1>Fun facts about React!</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100k starts on GitHub</li>
            <li>Is maintained by Meta</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
        
        <Page />
    </main>
)



function Page() {
    return (
        // same as a Fragment which is the same as a div
        <>
            <Header />
            <MainContent />
            <Footer />
        </>
    )
}

/**
 * Challenge:
 * 
 * 1. Add a `nav` > `ul` > `li` (x3). Items should say:
 * "Pricing", "About", and "Contact"
 */

/**
 * Challenge:
 * 
 * Use flexbox: line up the li's horizontally and put them inline
 * with the React logo
 * 
 * Note: don't select any elements, but use classes for all styling
 * 
 * Learned: 
 * display: flex
 * justify-content: space-between
 * margin-left: 10px
 * font-size: 1.1rem
 * 
 * Now move the width attribute to it's own place within the CSS file created.
 * This time with a width of 55px
 * 
 * Now to practice styling!
 */



function MainContent() {
    return (
        <main className="content">
            <h1>I am excited to learn React because:</h1>
            <ol className="content-list">
                <li>Getting better as a SWD!</li>
                <li>Adding more tools to my kit!</li>
            </ol>
        </main>
    )
}

function Footer() {
    return (
        <footer>
            <small>
                © 2024 Almanzar development. All rights reserved.
            </small>
        </footer>
    )
}
