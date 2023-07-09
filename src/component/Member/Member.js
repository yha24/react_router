import React, { Component } from 'react';

class Member extends Component {
    constructor(props){
        super(props);
        this.state={
            name: "Võ Thị Thúy Hà",
            age : 19
        };
    };
    render() {
        let sosanh = this.state.age
        if (sosanh>50) {
            return (
                <div>
                    <h4>{this.state.name}</h4>
                    <h6>{this.state.age} tuổi! Bạn đã già rồi</h6>
                </div>   
            );
        }else{
            return (
                <div>
                    <h4>{this.state.name}</h4>
                    <h6>{this.state.age} tuổi! Bạn còn trẻ chán</h6>
                </div>      
            );
        }
    };
};
export default Member;