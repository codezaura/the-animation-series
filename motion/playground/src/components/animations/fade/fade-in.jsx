import { MotionDiv } from "../../core";

import { Box, FlexBox } from "../../layouts";

import { bgcolor } from "../../../utility/bg-color";

export function FadeIn() {
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
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 0.25,
              delay: idx * 0.25,
            }}
          ></MotionDiv>
        ))}
      </FlexBox>
    </Box>
  );
}
