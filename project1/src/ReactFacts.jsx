
import { createRoot } from "react-dom/client"
import reactLogo from './assets/react.svg'

// now to add styling!
import "./ReactFactStyle.css"

// adding components!
import Header from "./Header"
import MainContent from "./MainContent"
import Footer from "./Footer"

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
 * Challenge: Separate what needs to be created for ReactFacts
 * Two components within an App component
 * Header:
 *      img
 *      text - could be a span to keep img and text inline
 * 
 * MainContent:
 *      h1
 *      ul - with 5 li's
 *      img 
 * 
 */


