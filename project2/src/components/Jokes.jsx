
export default function Joke (props) {
    return (
        <>
            {props.setup && <p>{props.setup}</p>} 
            <p>{props.punchline}</p>
            <hr/>
        </>
        )
}