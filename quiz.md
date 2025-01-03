# React Pop Quizzes!

# Quiz 2

1. What is a React component?
> Basically a function, which takes a chunk of JSX and is allowed to be used for later.

> Corrected: a function that returns React elements.

2. What's wrong with the following code?
```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```
> The only thing I can think of is the fact that the name of the method is not in Pascal case!


3. What's wrong with the following code?
```
function Header() {
    return (
        <header>
            <img src="./react-logo.png" width="40px" alt="React Logo />
        </header>
    )
}

root.render(Header())
```
> The way the Header component is being rendered in the root is not correct convention.
It should be in `<Header />`

# Quiz 3

1. What do props help us accomplish?

> Props helps us make our components have the ability to handle questions on design rather than data,
by passing in the inputs as a parameter to be manipulated within the component.

> Correct: Makes a component reusable!

2. How do you pass a prop into a component?

> Just like regular HTML, pass each property in as an attribute to the component.

3. Can I pass a custom prop (ex. `blahlbalba={true}`) to a native DOM element? 
    (ex. <div blahlbalba={true}>) Why or why not?

> No because a native DOM element already has its own specs

4. How do I receive props in a component?
function Navbar () {
    return (
        <header>
            ...
        </header>
    )
}

> By passing in props as a parameter to the Navbar function

5. What data type is `props` when the component receives it?

> a JSON!