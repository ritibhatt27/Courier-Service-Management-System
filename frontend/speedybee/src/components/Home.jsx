import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [activeTab, setActiveTab] = useState("track");

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>SpeedyBee Couriers 🐝📦</h1>
        <nav>
          <ul style={styles.navList}>
            <li><Link to="/login" style={styles.navLink}>Login</Link></li>
            <li><Link to="/signup" style={styles.navLink}>Signup</Link></li>
            <li><Link to="/contact" style={styles.navLink}>Contact</Link></li>
            <li><Link to="/track" style={styles.navLink}>Track Order</Link></li>
            <li><Link to="/ship" style={styles.navLink}>Ship Order</Link></li>
          </ul>
        </nav>
      </header>
      <main style={styles.main}>
        <h2>Buzzing Fast, Delivering Smart!</h2>
        <p>Experience the fastest and smartest courier service with SpeedyBee.</p>
        <div style={styles.tabContainer}>
          <div style={styles.tabHeader}>
            <button
              style={activeTab === "track" ? styles.activeTab : styles.tab}
              onClick={() => setActiveTab("track")}
            >
              Track Order
            </button>
            <button
              style={activeTab === "ship" ? styles.activeTab : styles.tab}
              onClick={() => setActiveTab("ship")}
            >
              Ship Order
            </button>
          </div>
          <div style={styles.tabContent}>
            {activeTab === "track" ? (
              <div style={styles.trackContainer}>
                <h3>Track Your Order</h3>
                <p>Enter your order ID below to check the delivery status.</p>
                <Link to="/track">
                  <button style={styles.button}>Track Order</button>
                </Link>
              </div>
            ) : (
              <div style={styles.shipContainer}>
                <h3>Ship Your Order</h3>
                <p>Enter your shipment details to schedule a pickup.</p>
                <Link to="/ship">
                  <button style={styles.button}>Ship Order</button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </main>
      <footer style={styles.footer}>
        <p>&copy; 2025 SpeedyBee Couriers. All rights reserved.</p>
      </footer>
    </div>
  );
}

const styles = {
  container: { fontFamily: "Arial, sans-serif", textAlign: "center" },
  header: { backgroundColor: "#FFC107", padding: "20px" },
  navList: { listStyle: "none", padding: 0, display: "flex", justifyContent: "center", gap: "15px" },
  navLink: { textDecoration: "none", color: "black", fontWeight: "bold" },
  main: { padding: "50px 20px" },
  tabContainer: { marginTop: "30px", textAlign: "center" },
  tabHeader: { display: "flex", justifyContent: "center", gap: "10px", marginBottom: "20px" },
  tab: { padding: "10px 20px", backgroundColor: "#ddd", border: "none", cursor: "pointer", borderRadius: "5px 5px 0 0" },
  activeTab: { padding: "10px 20px", backgroundColor: "#FFC107", border: "none", cursor: "pointer", borderRadius: "5px 5px 0 0", fontWeight: "bold" },
  tabContent: { padding: "20px", border: "1px solid #ddd", borderRadius: "0 5px 5px 5px" },
  trackContainer: { display: "inline-block" },
  shipContainer: { display: "inline-block" },
  button: { padding: "10px 20px", backgroundColor: "#FFC107", border: "none", cursor: "pointer", marginTop: "10px" },
  footer: { backgroundColor: "#333", color: "white", padding: "10px", marginTop: "20px" },
};

export default Home;