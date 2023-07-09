import React, { Component } from 'react';

class DemoForm1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            guestName: "Võ Thúy Hà",
            course: "Laravel",
            message: "Your message here!"
        };
    };
    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value//gộp các element ở thẻ input nếu không gộp, bạn sẽ phải viết nhiều lần
        });
    }
    handleSubmit = (event) => {
        alert('Tham gia: '
            + this.state.isGoing + ',họ tên:', '<br />'
            + this.state.guestName + ','
            + this.state.course + 'và ', '<br />'
            + this.state.message
        );
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <lable>Tham gia:
                    <input name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange} />
                </lable>
                <br />
                <lable>Ghi rõ họ tên:
                    <input name="guestName"
                        type="text"
                        value={this.state.guestName}
                        onChange={this.handleInputChange} />
                </lable>
                <br />
                <lable>Chọn khóa học:
                    <select name="course"
                        value={this.state.course}
                        onChange={this.handleInputChange}>
                        <option value="hmtl"> HTML</option>
                        <option value="css"> CSS</option>
                        <option value="laravel"> Laravel</option>
                    </select>
                </lable>
                <br />
                <lable>
                    Message:
                    <textarea
                     name="message"
                     type="text"
                        value={this.state.message}
                        onChange={this.handleInputChange} />
                </lable>
                <br />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default DemoForm1;