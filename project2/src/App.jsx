import Header from "./components/Header.jsx"
import Entry from "./components/Entry.jsx"
import Joke from "./components/Jokes.jsx"

export default function App() {

    return (
        <>
            <Header />
            <Entry />
           <Joke setup="What do you call a fake noodle?"
                 punchline="An impasta!" />
           <Joke setup="What do you call a skeleton without a name?"
                 punchline="Nobody knows!"/>
           <Joke setup=""
                 punchline="Im reading a book on anti-gravity—its impossible to put down."/>
           <Joke setup="Why don't scientists trust atoms?"
                 punchline="They make up everything!"/>

        </>
        )
}
