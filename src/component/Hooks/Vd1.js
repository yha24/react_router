import React, { Component } from 'react';

class Vd1 extends Component {
    state ={
        count : 0
    };
    setCount = () =>{
        this.setState({ count: this.state.count +1 })
    }
    render() {
        return (
            <div>
                <h2>{this.state.count}</h2>
                <button onClick={this.setCount}>Đếm số tăng dần</button>
            </div>
        );
    }
}

export default Vd1;