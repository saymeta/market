import React, {Component} from "react";
import "./App.css"

export class GrayFlat extends Component{
    render(){
        return(
            <div className="gray-flat">{this.props.data}</div>
        )
    }
}

export class BlueFlat extends Component{
    render(){
        return(
            <div className="blue-flat">{this.props.data}</div>
        )
    }
}

class BlueBtn extends Component{
    render(){
        return(
            <div className="blue-btn">{this.props.data}</div>
        )
    }
}

export default BlueBtn;