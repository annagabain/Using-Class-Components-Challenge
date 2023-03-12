import React from 'react';
import css from "./css/NavBarSimple.module.css";

class NavBarSimple extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: "Hello, guest!",
            buttonText: "log in",
        };
    }

    handleClick() {
        this.setState((prevState, prevProps) => {
            console.log("Previous State: ", prevState);
            console.log("Previous Props: ", prevProps);
            return {
                // Use prevState or prevProps to call on state
                message: prevState.message === "Hello, guest!" ? "Welcome back, user!" : "Hello, guest!",
                buttonText: prevState.buttonText === "log in" ? "log out" : "log in",
            }
        })
    }


    render() {
        return (
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                <span>{this.state.message} {this.props.greeting}</span>
                <button onClick = {() => this.handleClick()}>{this.state.buttonText}</button>
            </div>
        );
    }

}

export default NavBarSimple;