import React, { useState } from "react";

function Signup() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    deliveryType: "standard",
    securityQuestion: "",
    securityAnswer: "",
    referralCode: "",
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", formData);
  };

  return (
    <div style={styles.page}>
      <h2>Signup for Delivery</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} style={styles.input} required /><br />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} style={styles.input} required /><br />
        <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} style={styles.input} required /><br />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} style={styles.input} required /><br />
        <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} style={styles.input} required /><br />
       
        
        <label>
          <input type="checkbox" name="agreeToTerms" onChange={handleChange} required /> I agree to the Terms & Conditions
        </label><br />
        <button type="submit" style={styles.button}>Signup</button>
      </form>
    </div>
  );
}

const styles = {
  page: { textAlign: "center", padding: "50px" },
  input: { margin: "10px", padding: "10px", width: "250px" },
  button: { padding: "10px 20px", backgroundColor: "#FFC107", border: "none", cursor: "pointer", marginTop: "10px" }
};

export default Signup;
