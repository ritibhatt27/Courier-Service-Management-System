import React, { useState } from "react";

function TrackOrder() {
  const [orderId, setOrderId] = useState("");
  const [status, setStatus] = useState(null);

  const handleTrack = () => {
    // Mock tracking response
    const mockStatus = {
      "123456": "Out for Delivery",
      "789012": "Shipped",
      "345678": "Delivered",
    };

    setStatus(mockStatus[orderId] || "Order Not Found");
  };

  return (
    <div style={styles.page}>
      <h2>Track Your Order</h2>
      <input
        type="text"
        placeholder="Enter Order ID"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
        style={styles.input}
      />
      <br />
      <button onClick={handleTrack} style={styles.button}>
        Track Order
      </button>
      {status && <p style={styles.status}>Status: {status}</p>}
    </div>
  );
}

const styles = {
  page: { textAlign: "center", padding: "50px" },
  input: { margin: "10px", padding: "10px", width: "200px" },
  button: { padding: "10px 20px", backgroundColor: "#FFC107", border: "none", cursor: "pointer" },
  status: { marginTop: "20px", fontWeight: "bold" },
};

export default TrackOrder;