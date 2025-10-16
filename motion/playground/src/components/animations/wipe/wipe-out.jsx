import { MotionDiv } from "../../core";

import { Box, FlexBox } from "../../layouts";

import { bgcolor } from "../../../utility/bg-color";

export function WipeOut() {
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
            initial={{ scaleY: 1, transformOrigin: "0 0" }}
            animate={{ scaleY: 0 }}
            transition={{ ease: "backIn", delay: idx * 0.25, duration: 0.5 }}
          ></MotionDiv>
        ))}
      </FlexBox>
    </Box>
  );
}
