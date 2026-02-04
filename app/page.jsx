import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{
        background: "#000",
        color: "#fff",
        minHeight: "100vh",
        padding: "60px 8%",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* HEADER */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "80px",
        }}
      >
<Image
  src="/logo.svg"
  alt="The Dancehall Logo"
  width={170}
  height={85}
  style={{
    background: "white",
    padding: "10px 14px",
    borderRadius: "10px",
    boxShadow: "0 0 20px rgba(255,212,0,0.35)",
  }}
/>

        <button
          style={{
            background: "#FFD400",
            border: "none",
            padding: "14px 28px",
            fontWeight: "bold",
            fontSize: "14px",
            cursor: "pointer",
          }}
        >
          Réserver sa place
        </button>
      </header>

      {/* HERO */}
      <section style={{ maxWidth: "900px" }}>
        <h1 style={{ fontSize: "72px", marginBottom: "20px" }}>
          THE DANCEHALL
        </h1>

        <p style={{ fontSize: "22px", marginBottom: "12px", color: "#FFD400" }}>
          Première édition — Thème : <strong>Club Renaissance</strong>
        </p>

        <p style={{ fontSize: "20px", opacity: 0.9 }}>
          Une nuit. Un thème. 100% danse.
        </p>
      </section>

      {/* EVENT CARD */}
      <section
        style={{
          marginTop: "100px",
          background: "#0b0b0b",
          border: "1px solid rgba(255,212,0,0.25)",
          padding: "50px",
          maxWidth: "700px",
        }}
      >
        <h2 style={{ fontSize: "36px", marginBottom: "10px" }}>
          ÉDITION 01 — CLUB RENAISSANCE
        </h2>

        <p style={{ marginBottom: "25px", opacity: 0.85 }}>
          Renaissance des clubs. Nouvelle vibe. Nouvelle génération.
        </p>

        <ul style={{ listStyle: "none", padding: 0, fontSize: "18px" }}>
          <li>📅 <strong>30 avril 2026</strong></li>
          <li>📍 <strong>La Villa Lana</strong></li>
          <li>
            💰 <strong>15 000 F</strong> Early Bird —{" "}
            <strong>20 000 F</strong> Jour J
          </li>
        </ul>

        <button
          style={{
            marginTop: "30px",
            background: "#FFD400",
            border: "none",
            padding: "18px 36px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          🎟️ Acheter un billet
        </button>
      </section>
    </main>
  );
}
