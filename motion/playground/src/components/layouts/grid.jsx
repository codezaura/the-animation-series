export function Grid({ children, cols = 3, style = {} }) {
  return (
    <div
      style={{
        margin: "auto 0px",
        display: "grid",
        gap: "20px",
        gridTemplateColumns: `repeat(${cols}, auto)`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
