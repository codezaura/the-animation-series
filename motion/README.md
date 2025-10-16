# 🎬 The Animation Series — `motion`

Welcome, fellow builder 👋  
This part of the series is all about **`motion`**, the official animation library from the Framer team — built to make React apps come alive with buttery-smooth motion.

---

> [!important]\
> Before you dive in — make sure you’re comfortable with **React fundamentals** like components, props, and state.  
> We’ll be using them a lot while animating.

---

## 🚀 Getting Started

We’re starting clean — with a **fresh React app** (powered by `vite` ⚡).

```bash
npm create vite@latest
```

Then, install the Motion package:

```bash
npm install motion
```

## 🧱 Motion Architecture

We’ll create custom motion components so you don’t have to import `motion` in every single file.

```jsx
// animation.jsx

import { motion } from "motion/react";

export const MotionDiv = motion.create("div");
export const MotionButton = motion.create("button");
```

### 💡 Why This Setup Rocks

Normally, you’d write something like this every time:

```jsx
import { motion } from "motion/react";

function Component() {
  return (
    <>
      <motion.div />
      <motion.button>Click</motion.button>
    </>
  );
}
```

But now, with your reusable motion components:

```jsx
import { MotionDiv } from "../components/animation";

function Component() {
  return <MotionDiv />;
}
```

No extra imports. No repeated boilerplate.<br />
Just clean, consistent, and scalable motion components that keep your animation workflow tidy. 🧠✨


*—  In the next chapter we'll write some motion props with examples.*