import React, { useState } from 'react';

function Vd3 () {
const [imageUrl, setImageUrl] = useState('');
        return (
            <div>
                {/* <h1>My favorite color is {color}</h1> */}
                <img src={imageUrl} alt='My favarite color is'/>
                <button type='button' onClick={()=> setImageUrl("https://vapa.vn/wp-content/uploads/2022/12/anh-dep-lam-hinh-nen-002.jpg")}>Blue</button>
            </div>
        );
    }


export default Vd3;