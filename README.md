# React-Notyfy

A customizable React toast notification library designed to enhance user interaction with easy-to-use, lightweight, and reusable components. This library allows you to display success, error, warning, and info messages in your React applications with style.

# Table of Contents
1. [Features](#Features)
2. [Installation](#Installation)
3. [Usage](#Usage)
4. [Props](#props)
5. [Examples](#Examples)
6. [License](#License)

# Features
🔔 Customizable: Easily customize duration and position.  
🚀 Lightweight: Minimal overhead for fast and responsive performance.  
🎨 Stylish: Supports different types of notifications like success, error, info, and warning.  
🧩 Reusable: Designed with reusable components for seamless integration.

# Installation

To get started, install react-notyfy via npm:

```sh
npm install react-notyfy
```

# Usage
Import and use the React Notify component in your React project:

```jsx
import React from 'react';
import useNotification from 'react-notyfy';

function App() {
  const { NotificationComponent, triggerNotification } = useNotification("top-right");

  const handleClick = () => {
    triggerNotification({
      type: 'success',
      message: 'This is a success toast!',
      duration: 3000,
      position: 'top-right',
    });
  };

  return (
    <>
      <div>React Notify Example</div>
      <button onClick={handleClick}>Show Notification</button>
      {NotificationComponent}
    </>
  );
}

export default App;
```

# Props


| Prop        | Type     | Description                                          |
|-------------|----------|------------------------------------------------------|
| `type`      | `string` | Type of the toast (`'success'`, `'error'`, `'info'`, `'warning'`). |
| `message`   | `string` | Message to display in the toast.                     |
| `duration`  | `number` | Duration (in milliseconds) before the toast disappears. |

# Examples
Here are a few examples of how you can use react-notyfy:

1) Display a Success Toast

```js
triggerNotification({
  type: 'success',
  message: 'Data saved successfully!',
  duration: 5000,
});
```

2) Display an Information Toast

```js
triggerNotification({
  type: 'info',
  message: 'Please check for more information..!',
  duration: 4000,
});
```

3) Display a Warning Toast

```js
triggerNotification({
  type: 'warning',
  message: 'Warning toast',
  duration: 5000,
});
```

4) Display an Error message

```js
triggerNotification({
  type: 'error',
  message: 'Something went wrong, please try again!',
  duration: 4000,
});
```

# License
This project is licensed under the MIT License.