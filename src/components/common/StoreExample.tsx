import { useSharedId } from "@hooks/useSharedStore";
import { selectedId } from "@stores/shared";

export function StoreExample() {
  const id = useSharedId();

  const handleSetId = () => {
    const newId = `OPPDRAG-${Date.now()}`;
    selectedId.set(newId);
    console.log("✅ ID satt i localStorage:", newId);
  };

  const handleClearId = () => {
    selectedId.set(null);
    console.log("🗑️ ID fjernet fra localStorage");
  };

  const handleNavigate = () => {
    if (id) {
      console.log("🚀 Navigerer med ID:", id);
      window.location.href = "/oppdragsinfo";
    }
  };

  return (
    <div style={{ padding: "1rem", border: "1px solid #ccc", margin: "1rem" }}>
      <h3>Nanostores Persistent Example</h3>
      <div
        style={{
          marginBottom: "1rem",
          padding: "0.5rem",
          background: "#f0f0f0",
        }}
      >
        <small>
          💾 State lagres i localStorage og overlever page reload
          <br />
          🔄 Synkroniseres automatisk mellom browser tabs
        </small>
      </div>
      <div>
        <h4>Selected ID:</h4>
        <p style={{ fontFamily: "monospace", fontSize: "14px" }}>
          {id || "No ID selected"}
        </p>
        <div style={{ display: "flex", gap: "0.5rem", marginTop: "1rem" }}>
          <button onClick={handleSetId}>Set Random ID</button>
          <button onClick={handleClearId}>Clear ID</button>
          {id && (
            <button
              onClick={handleNavigate}
              style={{
                background: "#0066cc",
                color: "white",
                border: "none",
                padding: "0.5rem 1rem",
                cursor: "pointer",
              }}
            >
              Navigate to Oppdragsinfo →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
