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

// new challenge

/**
 * Create a custom "Page" component
 * 
 * It should return an ordered list with the reasons why you're
 * excited to be learning react :)
 * 
 * Render the Page component.
 * 
 * Part 2:
 * 
 * Add a <header> element with an <img /> with the React logo
 * Add an <h1> elelment with some text describing the page
 *      place it above the the ol
 * add a <footer> after the ol that has rights reserved
 * 
 * Mini challenge:
 * 
 * Move the header element from the Page component into 
 * its own component called "Header"
 * 
 * Then render an instance of the Header component inside
 * the Page component where the 'header' used to be
 * 
 * Continuation challenge:
 * 
 * create main and footer components!
 */

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

function Header() {
    return (
        <header>
            <img src={reactLogo} alt="React Logo" width="40px" />
        </header>
    )
}

function MainContent() {
    return (
        <main>
            <h1>I am excited to learn React because:</h1>
            <ol>
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
