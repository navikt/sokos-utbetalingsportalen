import { useSharedId } from "@hooks/useSharedStore";
import { selectedId } from "@stores/shared";

export function StoreExample() {
  const id = useSharedId();

  const handleSetId = () => {
    selectedId.set("12345-DEMO");
  };

  const handleClearId = () => {
    selectedId.set(null);
  };

  return (
    <div style={{ padding: "1rem", border: "1px solid #ccc", margin: "1rem" }}>
      <h3>Nanostores Example</h3>
      <div
        style={{
          marginBottom: "1rem",
          padding: "0.5rem",
          background: "#f0f0f0",
        }}
      >
        <small>
          � Delt state mellom islands/mikrofrontends
          <br />
          Sett en ID her og hent den i en annen komponent!
        </small>
      </div>
      <div>
        <h4>Selected ID:</h4>
        <p>{id || "No ID selected"}</p>
        <button onClick={handleSetId}>Set ID</button>
        <button onClick={handleClearId}>Clear ID</button>
      </div>
    </div>
  );
}
