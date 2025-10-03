export function Container({ children }) {
  return (
    <div
      style={{
        maxWidth: 720,
        padding: "8px",
        margin: "0px auto",
      }}
    >
      {children}
    </div>
  );
}
