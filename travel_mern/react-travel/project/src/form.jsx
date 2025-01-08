// Form.js (React frontend)

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Form.css';

function Form() {
  const [formData, setFormData] = useState({
    fullName: '',
    gmail: '',
    phoneNumber: '',
    arrivalDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send data to backend using fetch or axios
    try {
      const response = await fetch('http://localhost:5000/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      if (response.ok) {
        alert('Booking successful!');
      } else {
        alert('Error: ' + result.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting the form');
    }
  };

  return (
    <div>
      <header>
        <nav>
          <div className="navvs__logo">OnlyVACATION.com</div>
          <ul className="navvs__links">
            <li className="links1"><Link to="/">Home</Link></li>
            <li className="links1"><Link to="/booking">Book</Link></li>
            <li className="links1"><Link to="/blog">Blog</Link></li>
            <li className="links1"><Link to="/aboutus">About Us</Link></li>
          </ul>
        </nav>
      </header>

      <div className="body">
        <div className="form-container">
          <h1>Register & Book</h1><br />

          <form onSubmit={handleSubmit}>
            <label htmlFor="full_name">Full Name:</label><br />
            <input 
              type="text" 
              id="full_name" 
              name="fullName" 
              value={formData.fullName} 
              onChange={handleChange} 
              required 
            /><br />
            
            <label htmlFor="gmail">Gmail:</label><br />
            <input 
              type="email" 
              id="gmail" 
              name="gmail" 
              value={formData.gmail} 
              onChange={handleChange} 
              required 
            /><br />
            
            <label htmlFor="phone_number">Phone Number:</label><br />
            <input 
              type="tel" 
              id="phone_number" 
              name="phoneNumber" 
              value={formData.phoneNumber} 
              onChange={handleChange} 
              required 
            /><br />
            
            <label htmlFor="arrival_date">Arrival Date:</label><br />
            <input 
              type="date" 
              id="arrival_date" 
              name="arrivalDate" 
              value={formData.arrivalDate} 
              onChange={handleChange} 
              required 
            /><br />
            
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>

      <footer>
        <div className="footer-container">
          <div className="sec aboutus">
            <h2>About Us</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus quisquam minus quo illo numquam vel incidunt pariatur hic commodi expedita tempora praesentium at iure fugiat ea, quam laborum aperiam veritatis.</p>
          </div>
          
          <div className="sec quicklinks">
            <h2>Quick Links</h2>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
            </ul>
          </div>
          
          <div className="sec contactBx">
            <h2>Contact Info</h2>
            <ul className="info">
              <li><span><i className="bx bx-envelope"></i></span></li>
              <li>
                <p><a href="mailto:agowtham@gmail.com">agowtham689@gmail.com</a></p>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Form;
