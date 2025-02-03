import React from "react";

function Contact() {
  return (
    <div style={styles.page}>
      <h2>Contact Us</h2>
      <p>Email: support@speedybee.com</p>
      <p>Phone: +123 456 7890</p>
    </div>
  );
}

const styles = { page: { textAlign: "center", padding: "50px" } };

export default Contact;
