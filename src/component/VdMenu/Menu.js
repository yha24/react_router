import React, { useState } from 'react';

function Menu () {
    const [menu, setMenu] = useState({
        cafesua: 12000,
        cafeda: 10000,
        stingdau: 8000,
        trada: 2000,
    });
    return (
        <div>
            <div>
                <h1>Menu</h1>
                <h4>Cà phê sữa.............{menu.cafesua}</h4>
                <h4>Cà phê đá.............{menu.cafeda}</h4>
                <h4>Sting dâu.............{menu.stingdau}</h4>
                <h4>Trà đá.............{menu.trada}</h4>
                <div className='menu'>
                <p>Mời bạn chọn thức uống
                    <select>
                        <option>Cà phê sữa</option>
                        <option>Cà phê đá</option>
                        <option>Sting dâu</option>
                        <option>Trà đá</option>
                    </select>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Menu;
