## The Animation Series - `motion`

Animations using `motion` to power react based applications.

> [!important]\
> It is recommended to have good understanding of react.

### Start

We will start setup using initializing a fresh react application ( `vite` ).

```bash
npm create vite@latest
```

To install motion,

```bash
npm install motion
```

We've an architecture of using motion components across the series.

#### Architecture

1. Create a file as `motion-components.jsx` inside your `src/components` directory.

2. Use the following code.

```jsx
import { motion } from "motion/react";

export const MotionDiv = motion.create("div");

export const MotionButton = motion.create("button");
```

> [!tip]\
> This will eliminate the process of initializing motion multiple times.
>
> ```jsx
> import { motion } from "motion/react";
>
> function Component() {
>   return (
>     <>
>       <motion.div></motion.div>
>       <motion.button>Click</motion.button>
>     </>
>   );
> }
> ```
>
> Instead;
>
> ```jsx
> import { MotionDiv } from "../components/motion-components";
>
> function Component() {
>   return <MotionDiv></MotionDiv>;
> }
> ```
