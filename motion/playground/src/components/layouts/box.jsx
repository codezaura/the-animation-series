export function Box({ children }) {
  return (
    <div
      style={{
        marginTop: "12px",
        marginBottom: "40px",
        width: "100%",
        height: "400px",
        padding: "12px 16px",
        border: `2px solid #2b2b2b`,
        borderRadius: "16px",

        display: "grid",
      }}
    >
      {children}
    </div>
  );
}
