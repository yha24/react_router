import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/contact', formData);
      console.log(response.data); // Phản hồi từ Laravel

      // Đặc thù của bạn: xử lý phản hồi thành công và thông báo người dùng

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error.response.data); // Lỗi từ Laravel

      // Đặc thù của bạn: xử lý lỗi và thông báo người dùng
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
