import Header from "./components/Header.jsx"
import Entry from "./components/Entry.jsx"

export default function App() {
    const firstName = "Joe"
    const lastName = "Schmoe"

    return (
        <>
            <Header />
            <Entry />
            <h1>Hello {firstName} {lastName}</h1>
        </>
        )
}
