import { createRoot } from "react-dom/client"

const root = createRoot(document.getElementById("root"))
const reactElement = <h1>Hello from JSX!</h1>

function SayHi() {
   return (
        <h1>Hi React!</h1>
   )
}

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
