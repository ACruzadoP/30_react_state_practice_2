import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: false
        }
    }

    determineIfLogged() {
        if (this.state.isLoggedIn) {
            return "in"
        } else {
            return "out"
        }
    }

    render () {
        let isLogged = this.determineIfLogged()
        return (
            <div>
                <h1>You are currently logged {isLogged}</h1>
            </div>
        )
    }
}

export default App