# Utility Stack

Get access of all the utilities we are going to use across the development.

### 1. `bgcolor()`

```js
export const bgcolor = () => {
  return {
    background: `rgb(${Math.random() * 255},
      ${Math.random() * 255},
      ${Math.random() * 255})
      `
  }
}
```