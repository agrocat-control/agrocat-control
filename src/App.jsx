import { useState } from "react";

export default function App() {
  const [phone, setPhone] = useState("");

  return (
    <div style={{ 
      minHeight: "100vh", 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center",
      fontFamily: "Arial"
    }}>
      <div style={{
        background: "#fff",
        padding: "40px",
        borderRadius: "16px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        textAlign: "center"
      }}>
        <h1 style={{ color: "#166534" }}>
          AGROCAT CONTROL®
        </h1>

        <input
          type="text"
          placeholder="+521XXXXXXXXXX"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "20px",
            borderRadius: "8px",
            border: "1px solid #ccc"
          }}
        />

        <button
          style={{
            width: "100%",
            marginTop: "20px",
            padding: "10px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#15803d",
            color: "white",
            cursor: "pointer"
          }}
        >
          Enviar Código
        </button>
      </div>
    </div>
  );
}
