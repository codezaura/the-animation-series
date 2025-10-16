# `motion props`

In this chapter, we're going to cover the motion props we can use with motion components.

The entire animation revolves arround these props.

```jsx
import { MotionDiv } from "./components/animation";

function Animate() {
  return (
    <MotionDiv
      initial={{ x: 0 }}
      animate={{ x: 20 }}
      transition={{ duration: 0.5 }}
    ></MotionDiv>
  );
}
```

> [!note]\
> `initial` - The **`initial`** prop defines the **starting state** of your component before any animation begins.
>
> `animate` - The **`animate`** prop defines the **final state** — where the element should end up after the animation runs.
>
> `transition` - The `transition` prop defines how your animation moves from `initial` → `animate`.

Inside these initial and animate we can use any transform property.


