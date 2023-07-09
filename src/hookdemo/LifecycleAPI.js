import React, { useEffect, useState } from 'react';
import axios from "axios";
import Card from './Card';
function LifecycleAPI() {
    const [listProduct, setListProduct] = useState([]);
    const [type, setType] = useState("");
    
    const getData = () => {
        axios.get('https://61bc131bd8542f0017824588.mockapi.io/a/arrayproducts')
            .then((res) => {
                setListProduct(res.data);
            });
    };
    
    useEffect(() => {
        getData();
    }, []);
    
    return (
        <div id="products">
            {type === ""
                ? listProduct.map((product) => 
                    <Card
                        key={product.id}
                        image={product.avatar}
                        nameItem={product.name}
                        price={product.price}
                    />
                )
                : listProduct
                    .filter((product) => product.type === String(type))
                    .map((product) => (
                        <Card
                            key={product.id}
                            image={product.avatar}
                            nameItem={product.name}
                            price={product.price}
                        />
                    ))
            }
        </div>
    );
}

export default LifecycleAPI;