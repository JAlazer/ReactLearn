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
        <h1>I am excited to learn React because:</h1>
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
 */

function Page() {
    return (
        <ol>
            <li>Getting better as a SWD!</li>
            <li>Adding more tools to my kit!</li>
        </ol>
    )
}
