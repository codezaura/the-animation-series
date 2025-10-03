import { makeColor } from "../../utils/make-color";
import { MotionDiv } from "../core";

export function WipeIn() {
  return (
    <div>
      <h1>Wipe Animations</h1>

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
            initial={{ height: 0 }}
            animate={{ height: 200 }}
            transition={{ ease: "backOut", delay: idx * 0.25, duration: 0.5 }}
          ></MotionDiv>
        ))}
      </div>
    </div>
  );
}
