import {
  useSharedId,
  useSharedContext,
  getStores,
} from "@hooks/useSharedStore";

export function StoreExample() {
  const selectedId = useSharedId();
  const context = useSharedContext();
  const stores = getStores();

  const handleSetId = () => {
    if (stores) {
      stores.setSelectedId("12345-DEMO");
    }
  };

  const handleClearId = () => {
    if (stores) {
      stores.clearSelectedId();
    }
  };

  const handleSetContext = () => {
    if (stores) {
      stores.setSharedContext({
        currentOppdrag: "OPPDRAG-001",
        currentKontonummer: "12345678901",
        navigationHistory: ["/attestasjon", "/oppdragsinfo"],
      });
    }
  };

  const handleClearContext = () => {
    if (stores) {
      stores.clearSharedContext();
    }
  };

  const handleClearAll = () => {
    if (stores) {
      stores.clearAllStores?.();
    }
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
          💾 State lagres i sessionStorage og persisterer ved sideoppdatering.
          <br />
          Prøv å sette verdier og refresh siden!
        </small>
      </div>
      <div>
        <h4>Selected ID:</h4>
        <p>{selectedId || "No ID selected"}</p>
        <button onClick={handleSetId}>Set ID</button>
        <button onClick={handleClearId}>Clear ID</button>
      </div>
      <div>
        <h4>Shared Context:</h4>
        <pre>{JSON.stringify(context, null, 2)}</pre>
        <button onClick={handleSetContext}>Set Context</button>
        <button onClick={handleClearContext}>Clear Context</button>
      </div>
      <div style={{ marginTop: "1rem" }}>
        <button
          onClick={handleClearAll}
          style={{ background: "#c30000", color: "white" }}
        >
          Clear All (inkl. sessionStorage)
        </button>
      </div>
    </div>
  );
}
