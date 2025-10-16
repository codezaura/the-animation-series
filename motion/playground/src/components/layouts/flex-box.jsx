export function FlexBox({ children, style = {} }) {
  return (
    <div
      style={{
        gap: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
