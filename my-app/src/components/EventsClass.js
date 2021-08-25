import React, { Component } from 'react'

export class EventsClass extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        // bind methods (especially when using the this keyword, for example to update state)
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(){
        console.log("Clicked the class button")
    }
    
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>click me - class component</button>
            </div>
        )
    }
}

export default EventsClass
