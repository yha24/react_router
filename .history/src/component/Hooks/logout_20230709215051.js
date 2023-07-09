import React, { Component } from 'react';
import { useState } from 'react';

const logout= () => {
    const[logout,logoutchange]=useState("")


        return (
            <button onClick={onLogout}>
            Đăng xuất
          </button>

        );
    }

export default logout;