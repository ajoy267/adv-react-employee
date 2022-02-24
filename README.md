# adv-react-tailwind-template

This template is a modified version of our [React Template](https://github.com/alchemycodelab/react-template). It provides a way to use [Tailwind CSS](https://tailwindcss.com/) classes for styling React components by using just `className`s and no custom CSS.

## Getting Started

Click "Use this template" to create a new repo with your user as the owner. Then clone down the newly created repo and get hacking!

## Differences from the [React Template](https://github.com/alchemycodelab/react-template)

Currently, this template does **not** support CSS modules like the React Template does. What this means is that when you import stylesheets in this template, you'll import them directly and then use the same class names in your JSX that you used in your CSS file:

### Tailwind Template

```css
/* styles.css */
.myCustomCssClass {
 font-family: monospace;
}
```

```js
// App.jsx
import './styles.css'

export default function App() {
  return (
    <h1 className='myCustomCssClass'>
      Hello, World!
    </h1>
  );
}

```


vs.

### React Template

```css
/* styles.css */
.myCustomCssClass {
 font-family: monospace;
}
```

```js
// App.jsx
import styles from './styles.css'

export default function App() {
  return (
    <h1 className={`${styles.myCustomCssClass}`}>
      Hello, World!
    </h1>
  );
}

```
