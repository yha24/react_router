import React, { useState } from 'react';

function Hookmenu() {
    const [type, setType] = useState('');
    const [price, setPrice] = useState('');
    const [money, setMoney] = useState('');

    const checkOrder = (money) => {
        if (money >= price) {
            alert(`Đồ uống của bạn đây: ${type} \n Số tiền dư: ${money - price} đ`);
        } else {
            alert('Không đủ tiền');
        }
    }

    const submitForm = (event) => {
        event.preventDefault();
        if (price === '') {
            alert('Vui lòng chọn đồ uống');
        } else {
            if (money === '') {
                alert('Vui lòng nhập số tiền của bạn');
            } else {
                checkOrder(money);
            }
        }
    }

    const setHandle = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        if (name === 'type') {
            setType(value);
            if (value === 'Caffe sữa') {
                setPrice(12000);
            } else if (value === 'Caffe đá') {
                setPrice(10000);
            } else if (value === 'Sting dâu') {
                setPrice(8000);
            } else {
                setPrice(2000);
            }
        }

        if (name === 'money') {
            if (!Number(value)) {
                alert('Nhập số vào bạn ơi');
            } else {
                setMoney(value);
            }
        }
    }

    return (
        <div>
            <form onSubmit={submitForm}>
                <table>
                    <tbody>
                        <tr>
                            <td>Mời bạn chọn thức uống:</td>
                            <td>
                                <select onChange={setHandle} name='type'>
                                    <option selected hidden>Mời chọn</option>
                                    <option value='Caffe sữa'>Caffee sữa</option>
                                    <option value='Caffe đá'>Caffee đá</option>
                                    <option value='Sting dâu'>Sting dâu</option>
                                    <option value='trà đá'>Trà đá</option>
                                </select>
                            </td>
                            <td><label>Price---<input type='number' readOnly value={price}></input>  </label></td>
                        </tr>
                        <tr>
                            <td>Mời nhập tiền của bạn</td>
                            <td>
                                <input name='money' type='number' onChange={setHandle}></input>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <input type='submit' value='Thanh toán'></input>
            </form>
        </div>
    );
}

export default Hookmenu;
