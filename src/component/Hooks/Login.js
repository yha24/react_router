
import React, { useState } from 'react';

const Login = ({handleSubmit}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className='App'>
            <header className='App-header'>
                <form onSubmit={handleSubmit}>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Nhập Email' /> <br /> <br />
                    <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Nhập Password'/><br /><br />
                    <button type='submit'>Submit</button>
                </form>
            </header>
        </div>
    );
}

export default Login;
