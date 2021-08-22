import { Component } from "react"

class ClassbasedGreeting extends Component{
    constructor(props){
        super(props)
        this.state={
            greeting: "Hello",
            buttonText: "Exit",
            count: 0,
        }
        this.updateGreeting = this.updateGreeting.bind(this)
        this.increment = this.increment.bind(this)
        this.incrementFive = this.incrementFive.bind(this)
    }

    updateGreeting(){
        this.setState( state => ({
            greeting: state.greeting === "Hello" ? "Goodbye" : "Hello",
            buttonText: state.buttonText ==="Enter" ? "Exit": "Enter",
        }))
    }

    increment(){
        this.setState(state => ({
            count: state.count + 1
        }))
    }

    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render(){
        return (
            <div>
                <h1>{this.state.greeting} {this.props.name} from the stateful class component</h1>
                <button onClick={this.updateGreeting}>{this.state.buttonText}</button>
                <h2>Number of times the increment button was clicked: {this.state.count}</h2>
                <button onClick={this.incrementFive}>Increment</button>
            </div>
        )
    }
}

export default ClassbasedGreeting
