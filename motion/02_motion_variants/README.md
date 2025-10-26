# `motion variants`

**variants** are amazing superpowers of _motion_.

> [!note]\
> Checkout `utility.md` for `bgcolor` utility.

We can write variants as 👇

```jsx
<MotionDiv
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
/>
```

That is not the full potential of _variants_ prop.

### Why `variants`?

_variants_ let us 👇

- Define animation state once
- Reuse them _everywhere_
- Control many child animations from a **single parent trigger** 😎

Imagine there is a scenerio, you want to apply the animation effects for 20 elements.<br />
What you can do without _variants_ prop

```jsx
// Animation defining for 20 elements 🥲
<MotionDiv
  initial={{
    opacity: 0,
    x: -50,
  }}
  animate={{
    opacity: 1,
    x: 0,
  }}
/>
```

Instead just create a animation type using variants and use it for your all of the components as 👇

```jsx
const animationVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

<MotionDiv
  variants={animationVariants}
  initial="hidden"
  animate="visible"
  style={{
    width: 100,
    height: 100,
    ...bgcolor(),
  }}
></MotionDiv>;
```

There are more possiblities with variants, moving inside a module file.

```js
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

// ------------------------------------------------

import { fadeIn } from "../components/animation";

<MotionDiv
  variants={fadeIn}
  initial="hidden"
  animate="visible"
  style={{ width: 100, height: 100, ...bgcolor() }}
/>;
```

**Parent** --> **Child** orchestration

```jsx
const parent = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const child = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

// -------------------------------------------------------------

<motion.ul variants={parent} initial="hidden" animate="visible">
  {items.map((item) => (
    <motion.li key={item} variants={child}>
      {item}
    </motion.li>
  ))}
</motion.ul>
```
