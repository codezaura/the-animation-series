import { bgcolor } from "../../../utility/bg-color";
import { MotionDiv } from "../../core";

export function Variants() {
  return (
    <div style={{ marginTop: 30 }}>
      {/* <MotionDiv
        style={{ height: 200, width: 200, ...bgcolor() }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{
          duration: 1,
          damping: 20,
          stiffness: 120,
          ease: "easeOut",
        }}
      /> */}

      <MotionDiv
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              delayChildren: 0.25,
              staggerChildren: 0.2,
            },
          },
        }}
        initial="hidden"
        animate="visible"
      >
        {[...Array(3)].map((_, idx) => (
          <MotionDiv
            key={idx}
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 },
            }}
            style={{
              width: 100,
              height: 100,
              borderRadius: "8px",
              ...bgcolor(),
            }}
          />
        ))}
      </MotionDiv>
    </div>
  );
}
