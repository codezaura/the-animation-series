import { makeColor } from "../../utils/make-color";
import { MotionDiv } from "../core";

export function FadeIn() {
  return (
    <div style={{ marginTop: 30 }}>
      <h1>Fade Animations</h1>

      <div
        style={{
          margin: "12px 4px 40px 0px",
          display: "grid",
          gap: "20px",
          gridTemplateColumns: "1fr 1fr 1fr",
        }}
      >
        {[...Array(3)].map((_, idx) => (
          <MotionDiv
            key={idx}
            style={{
              height: 200,
              borderRadius: "12px",
              ...makeColor(),
            }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.25, delay: idx * 0.25 }}
          ></MotionDiv>
        ))}
      </div>
    </div>
  );
}
