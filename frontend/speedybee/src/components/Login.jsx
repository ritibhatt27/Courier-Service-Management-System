import React from "react";

function Login() {
  return (
    <div style={styles.page}>
      <h2>Login</h2>
      <form>
        <input type="text" placeholder="Username" style={styles.input} /><br />
        <input type="password" placeholder="Password" style={styles.input} /><br />
        <button style={styles.button}>Login</button>
      </form>
    </div>
  );
}

const styles = {
  page: { textAlign: "center", padding: "50px" },
  input: { margin: "10px", padding: "10px", width: "200px" },
  button: { padding: "10px 20px", backgroundColor: "#FFC107", border: "none", cursor: "pointer" }
};

export default Login;
