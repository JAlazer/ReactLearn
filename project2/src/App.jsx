import Header from "./components/Header.jsx"
import Entry from "./components/Entry.jsx"
import Contact from "./components/Contact.jsx"

import Whiskerson from "./assets/mr-whiskerson.png"
import Felix from "./assets/felix.png"
import Fluffy from "./assets/fluffykins.png"
import Pumpkin from "./assets/pumpkin.png"


export default function App() {

    return (
        <>
            <Header />
            <Entry />
            <Contact
                img={Whiskerson}
                name="Mr. Whiskerson"
                number="(212)-555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <Contact
                img={Felix}
                name="Felix"
                number="(212)-555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <Contact 
                img={Fluffy}
                name="Fluffy"
                number="(212)-555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <Contact 
                img={Pumpkin}
                name="Pumpkin"
                number="(212)-555-1234"
                email="mr.whiskaz@catnap.meow"
            />
        </>
        )
}
