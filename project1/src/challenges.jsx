import { createRoot } from "react-dom/client"

const root = createRoot(document.getElementById("root"))
const reactElement = <h1>Hello from JSX!</h1>

function SayHi() {
   return (
        <h1>Hi React!</h1>
   )
}

/*

// Chllenge: create first custom react component!
// call it "MainContent" and return h1 element which says
// "React is great!"
// After Render it below SayHi

function MainContent() {
    return (
        <h1>React is Great!</h1>
    )
}

root.render(
    <div>
        <SayHi />,
        <MainContent />
    </div>
)
    
*/

/**
 * Challenge: set up a new React app from scratch!
 * Hints:
 * 1. Need to import the method to create a new root
 *    from the "react-dom/client"
 * 2. Use that root to render some JSX. For now, just render
 *    an h1 element that says anything you want
 */


root.render(
    <main>
        <SayHi />,
        <img src="/vite.svg" />,
        <h1>Need to keep Reacting!</h1>
    </main>
)
    
