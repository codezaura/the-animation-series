export function Container({ children }) {
  return (
    <div
      style={{
        maxWidth: 840,
        padding: "8px",
        margin: "0px auto",
      }}
    >
      {children}
    </div>
  );
}
