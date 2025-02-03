import React, { useState } from "react";

function ShipOrder() {
  const [shipmentDetails, setShipmentDetails] = useState({
    from: "",
    to: "",
    weight: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShipmentDetails({ ...shipmentDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission
    console.log("Shipment Details Submitted:", shipmentDetails);
    alert("Shipment request submitted successfully!");
  };

  return (
    <div style={styles.page}>
      <h2>Ship Your Order</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="from"
          placeholder="From Address"
          value={shipmentDetails.from}
          onChange={handleInputChange}
          style={styles.input}
          required
        />
        <input
          type="text"
          name="to"
          placeholder="To Address"
          value={shipmentDetails.to}
          onChange={handleInputChange}
          style={styles.input}
          required
        />
        <input
          type="number"
          name="weight"
          placeholder="Weight (kg)"
          value={shipmentDetails.weight}
          onChange={handleInputChange}
          style={styles.input}
          required
        />
        <textarea
          name="description"
          placeholder="Package Description"
          value={shipmentDetails.description}
          onChange={handleInputChange}
          style={styles.textarea}
          required
        />
        <button type="submit" style={styles.button}>
          Ship Order
        </button>
      </form>
    </div>
  );
}

const styles = {
  page: { textAlign: "center", padding: "50px" },
  form: { display: "flex", flexDirection: "column", alignItems: "center" },
  input: { margin: "10px", padding: "10px", width: "300px" },
  textarea: { margin: "10px", padding: "10px", width: "300px", height: "100px" },
  button: { padding: "10px 20px", backgroundColor: "#FFC107", border: "none", cursor: "pointer" },
};

export default ShipOrder;