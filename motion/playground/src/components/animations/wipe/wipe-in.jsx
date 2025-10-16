import { MotionDiv } from "../../core";

import { Box, FlexBox } from "../../layouts";

import { bgcolor } from "../../../utility/bg-color";

export function WipeIn() {
  return (
    <Box>
      <FlexBox>
        {[...Array(1)].map((_, idx) => (
          <MotionDiv
            key={idx}
            style={{
              width: 200,
              height: 200,
              borderRadius: "12px",
              ...bgcolor(),
            }}
            initial={{ scaleY: 0, transformOrigin: "0" }}
            animate={{ scaleY: 1 }}
            transition={{ ease: "backOut", delay: idx * 0.25, duration: 0.5 }}
          ></MotionDiv>
        ))}
      </FlexBox>
    </Box>
  );
}
