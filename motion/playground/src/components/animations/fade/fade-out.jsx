import { MotionDiv } from "../../core";

import { Box, FlexBox } from "../../layouts";

import { bgcolor } from "../../../utility/bg-color";

export function FadeOut() {
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
            initial={{ y: 0, opacity: 1 }}
            animate={{ y: 30, opacity: 0 }}
            transition={{
              ease: "easeInOut",
              duration: 0.25,
              delay: 0.5,
            }}
          ></MotionDiv>
        ))}
      </FlexBox>
    </Box>
  );
}
