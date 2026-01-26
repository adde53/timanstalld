import { useState } from "react";

export function CookieBanner() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div style={{ position: "fixed", bottom: 0, width: "100%", background: "#222", color: "#fff", padding: "1rem", zIndex: 1000 }}>
      Denna webbplats använder cookies för att förbättra din upplevelse. <a href="/gdpr" style={{ color: "#fff", textDecoration: "underline" }}>Läs mer</a>.
      <button onClick={() => setVisible(false)} style={{ marginLeft: "1rem", background: "#fff", color: "#222", border: "none", borderRadius: "4px", padding: "0.5rem 1rem" }}>
        Acceptera
      </button>
    </div>
  );
}