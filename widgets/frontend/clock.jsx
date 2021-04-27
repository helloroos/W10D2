import React from "react"

class Clock extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            time: new Date().toLocaleString()
        }
        this.tick = this.tick.bind(this)
        this.interval = setInterval(() => this.tick(), 1000)
    }


    tick(){
        this.setState({
            time: new Date().toLocaleString()
        })
    }

    componentDidMount(){
        console.log("we are inside did Mount!!!!")
        this.interval;
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

    render() {
        return(
            <h1>
                {this.state.time}
            </h1>
        )
    }
}

export default Clock;