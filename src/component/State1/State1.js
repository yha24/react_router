import React, { Component } from 'react';
// import { getData } from '../Data/Data';

class State1 extends Component {
    constructor(props){
        super(props);
        this.state ={
            // brand: "Ford"
            // model: "Mustang",
            // color: "red",
            // year : 1999
            name: 'your name'
        };

        // var arr = getData()
        // super(props);
        // this.state ={arr};

    }
    changeColor=()=>{
        this.setState({color: "yellow"});
    }
    onChange =(e) =>{
        this.setState({name: e.target.value})
    }
    render() {
        // const squareStyle = {
        //     width: '100px',
        //     height: '100px',
        //     backgroundColor: this.state.color,
        // };
        return (
            // <div>{
            //     this.state.arr.map(key =>
            //         <div> <h5>{key.name}</h5>
            //         <h5>{key.loai}</h5>
            //         <img src={key.image}></img>
            //         </div>
            //         )
            //     }
                
            // </div>
            <div>
                {/* <h4>My {this.state.brand}</h4>
                <p>
                    It is a {this.state.color} {this.state.model} from {this.state.year}
                </p> */}
                {/* <div style={squareStyle}></div> <br></br> */}
                {/* <div style={{backgroundColor: this.state.color}}>Thúy Hà</div><br>
                </br>
                <button type='button' onClick={() => this.setState({color: "yellow"})}>Change color</button> */}
                <input type='text'placeholder='Your name' onChange={this.onChange.bind(this)}></input>
                <h5>Hello {this.state.name}</h5>
            </div>
            );
    }
}

export default State1;