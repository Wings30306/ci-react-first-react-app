import { Component } from "react"

class ClassbasedGreeting extends Component{
    render(){
        return (
            <div>
                <h1>Hello {this.props.name} from the stateful class component</h1>
            </div>
        )
    }
}

export default ClassbasedGreeting
