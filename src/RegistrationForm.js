// src/RegistrationForm.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telephone: '',
    age: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS configuration
    const serviceID = 'service_ylaqizf';
    const templateID = 'template_u25g3j4';
    const userID = 'pZEqbGEdiUmUf5KQw'; // Replace with your EmailJS User ID

    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        alert('Registration submitted successfully!');
        setFormData({ name: '', email: '', telephone: '', age: '' }); // Reset form
      })
      .catch((error) => {
        alert('An error occurred. Please try again.');
        console.error('EmailJS error:', error);
      });
  };

  return (
    <div style={styles.container}>
      <h2>Free BootCamp Registration Form</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label>Telephone</label>
          <input
            type="tel"
            name="telephone"
            placeholder="Enter your telephone"
            value={formData.telephone}
            onChange={handleChange}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label>Gender</label>
          <input
            type="gender"
            name="gender"
            placeholder="Enter your gender"
            value={formData.gender}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" style={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
}

const styles = {
    
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    backgroundColor: '#f4f4f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },


  formGroup: {
    marginBottom: '15px',
  },
  submitButton: {
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  }
};
export default RegistrationForm;
