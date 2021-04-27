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
            <div className="clock-container">
                <h1>Clock</h1>
                <div className="clock">
                    <h1>
                        Date/Time {this.state.time}
                    </h1>
                </div>
            </div>
        )
    }
}

export default Clock;