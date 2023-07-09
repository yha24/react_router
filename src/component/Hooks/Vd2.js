import React, { useState } from 'react';

function Vd2 (){
    const [count, setCount] = useState(0);
        return (
            <div>
                <h1>{ count }</h1>
                <button onClick={ ()=> setCount(count + 1)}>Đếm số</button>
            </div>
        );
    }


export default Vd2;