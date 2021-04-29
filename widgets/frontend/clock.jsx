import React from "react"

class Clock extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            dateObject: new Date()//.toLocaleString()
        }

        this.tick = this.tick.bind(this)
        this.interval = setInterval(() => this.tick(), 1000)

    }


    tick(){
        this.setState({
            dateObject: new Date()//.toLocaleString()
        })
    }

    componentDidMount(){
        this.interval;
    }

    // componentWillUnmount(){
    //     clearInterval(this.interval)
    // }

    render() {
        return(
            <div>
                <div>
                    <div></div>
                </div>
            </div>
        )
        // return(
        //     <div className="clock-container">
        //         <h1>Clock</h1>
        //         <div className="clock">
        //             <h1>
        //                 Date/Time {this.state.dateObject}
        //             </h1>
        //         </div>
        //     </div>
        // )
    }
}

export default Clock;