# React Pop Quizzes!

# Quiz 2

1. What is a React component?
> Basically a function, which takes a chunk of JSX and is allowed to be used for later.
Corrected: a function that returns React elements.

2. What's wrong with the following code?
...
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
...
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
It should be in <Header />

