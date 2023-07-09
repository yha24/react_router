import React, { Component } from 'react';

class DrinkMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: '',
            price: '',
            money: ''
        }
    }
    checkOrder = (money) => {
        if (money >= this.state.price) {
            alert("Đồ uống của bạn đây: " + this.state.type + '\n Số tiền dư: ' + (money - this.state.price) + "đ")
        }
        else {
            alert('Không đủ tiền')
        }
    }
    submitForm = (event) => {
        event.preventDefault();
        if (this.state.type == '') {
            alert("Vui lòng chọn đồ uống");
        }
        else {
            if (this.state.money == '') {
                alert("Vui lòng nhập số tiền của bạn")
            }
            else {
                this.checkOrder(this.state.money)
            }
        }
    }
    setHandle = async (event) => {
        let name = event.target.name;
        let value = event.target.value;
        await this.setState({ [name]: value });
        if (name === 'type'){
            if (value === "Caffe sữa") {
                this.setState({ price: 12000 });
            } else if (value === "Caffe đá") {
                this.setState({ price: 10000 });
            } else if (value === "Sting dâu") {
                this.setState({ price: 8000 });
            } else {
                this.setState({ price: 2000 });
            }
        }
        if (name === 'money') {
            if (!Number(value)) {
                alert("Nhập số vào bạn ơi")
            }
        }
    }
    render() {//hàm render()
        return (
            <div>
                <form onSubmit={this.submitForm}>
                    <table>
                        <tbody>
                            <tr>
                                <td>Mời bạn chọn thức uống:</td>
                                <td>
                                    <select onChange={this.setHandle} name='type'>
                                        <option selected hidden>Mời chọn</option>
                                        <option value="Caffe sữa">Caffee sữa</option>
                                        <option value="Caffe đá">Caffee đá</option>
                                        <option value="Sting dâu">Sting dâu</option>
                                        <option value="trà đá">Trà đá</option>
                                    </select>
                                </td>
                                <td><label>Price---{this.state.price}</label></td>
                            </tr>
                            <tr>
                                <td>Mời nhập tiền của bạn</td>
                                <td>
                                    <input name='money' type='number' onChange={this.setHandle}></input>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <input type='submit' value="Thanh toán"></input>
                </form>
            </div>
        );
    }
}

export default DrinkMenu;
// import React, { useState } from 'react';

// const DrinkMenu = () => {
//   const [type, setType] = useState('');
//   const [price, setPrice] = useState('');
//   const [money, setMoney] = useState('');

//   const checkOrder = (money) => {
//     if (money >= price) {
//       alert(`Đồ uống của bạn đây ${type}\n Số tiền dư: ${money - price}đ`);
//     } else {
//       alert('Không đủ tiền');
//     }
//   };

//   const submitForm = (event) => {
//     event.preventDefault();
//     if (price === '') {
//       alert('Vui lòng chọn đồ uống');
//     } else {
//       if (money === '') {
//         alert('Vui lòng nhập số tiền của bạn');
//       } else {
//         checkOrder(money);
//       }
//     }
//   };

//   const setHandle = (event) => {
//     const { name, value } = event.target;
//     setType(value);
//     if (name === 'type') {
//       if (value === 'Caffe sữa') {
//         setPrice(12000);
//       } else if (value === 'Caffe đá') {
//         setPrice(10000);
//       } else if (value === 'Sting dâu') {
//         setPrice(8000);
//       } else {
//         setPrice(2000);
//       }
//     }
//     if (name === 'money') {
//       if (!Number(value)) {
//         alert('Nhập số vào bạn ơi');
//       }
//       setMoney(value);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={submitForm}>
//         <table>
//           <tbody>
//             <tr>
//               <td>Mời bạn chọn thức uống:</td>
//               <td>
//                 <select onChange={setHandle} name="type">
//                   <option selected hidden>
//                     Mời chọn
//                   </option>
//                   <option value="Caffe sữa">Caffee sữa</option>
//                   <option value="Caffe đá">Caffee đá</option>
//                   <option value="Sting dâu">Sting dâu</option>
//                   <option value="trà đá">Trà đá</option>
//                 </select>
//               </td>
//               <td>
//                 <label>
//                   Price---<input type="number" readOnly value={price}></input>
//                 </label>
//               </td>
//             </tr>
//             <tr>
//               <td>Mời nhập tiền của bạn</td>
//               <td>
//                 <input name="money" type="number" onChange={setHandle}></input>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//         <input type="submit" value="Thanh toán"></input>
//       </form>
//     </div>
//   );
// };

// export default DrinkMenu;
