### Example one

```
Here is a full React project that demonstrates a deep use of the Context API:

Project: A simple blog with user authentication and authorization, using the Context API to manage state and authentication across components.

Files:

1. src/AuthContext.js:

jsx
import { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const login = (user, token) => {
    setUser(user);
    setToken(token);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };

1. src/App.js:

jsx
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import Home from './Home';
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

1. src/Home.js:

jsx
import React from 'react';
import { AuthContext } from '../AuthContext';

const Home = () => {
  const { user } = React.useContext(AuthContext);

  if (user) {
    return <div>Welcome, {user.name}!</div>;
  } else {
    return <div>Please login to continue.</div>;
  }
};

export default Home;

1. src/Login.js:

jsx
import React, { useState } from 'react';
import { AuthContext } from '../AuthContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = React.useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;

1. src/Dashboard.js:

jsx
import React from 'react';
import { AuthContext } from '../AuthContext';

const Dashboard = () => {
  const { user, token } = React.useContext(AuthContext);

  if (!user || !token) {
    return <div>Unauthorized</div>;
  }

  return <div>Welcome to your dashboard, {user.name}!</div>;
};

export default Dashboard;

This project uses the Context API to manage authentication state across components. The AuthContext is created in src/AuthContext.js and provides the user, token, login, and logout values to its descendants.

The AuthProvider component wraps the entire app and provides the authentication state to all components that use the AuthContext.

The Home component uses the AuthContext to display a welcome message if the user is logged in.

The Login component uses the AuthContext to login the user and update the authentication state.

The Dashboard component uses the AuthContext to check if the user is logged in and authorized to access the dashboard.

This project demonstrates a deep use of the Context API to manage state and authentication across components.
```

### Example two

```
Files:

1. src/PostContext.js:

import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const PostContext = createContext();

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('/api/posts');
        setPosts(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const getPost = (id) => {
    const post = posts.find((post) => (link unavailable) === id);
    return post;
  };

  return (
    <PostContext.Provider value={{ posts, loading, getPost }}>
      {children}
    </PostContext.Provider>
  );
};

export { PostProvider, PostContext };

1. src/App.js:

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PostProvider } from './PostContext';
import Home from './Home';
import PostDetail from './PostDetail';

function App() {
  return (
    <PostProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/post/:id" component={PostDetail} />
        </Switch>
      </BrowserRouter>
    </PostProvider>
  );
}

export default App;

1. src/Home.js:

import React from 'react';
import { PostContext } from '../PostContext';

const Home = () => {
  const { posts, loading } = React.useContext(PostContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {posts.map((post) => (
        <li key={(link unavailable)}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
};

export default Home;

1. src/PostDetail.js:

import React from 'react';
import { PostContext } from '../PostContext';

const PostDetail = () => {
  const { getPost } = React.useContext(PostContext);
  const id = parseInt(window.location.pathname.split('/').pop(), 10);
  const post = getPost(id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetail;

```

### Example 3

```
// themeContext.js
import { createContext, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };

And here's how you can use it in your components:

// App.js
import React from 'react';
import { ThemeProvider } from './themeContext';

const App = () => {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
};

export default App;


// Home.js
import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from './themeContext';

const Home = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Current theme: {theme}</p>
    </div>
  );
};

export default Home;
```

### Example 4
```
CartContext.js

import { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (item) => {
    setCart(cart.filter((i) => i !== item));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };

App.js

import React from 'react';
import { CartProvider } from './CartContext';
import Home from './Home';
import Cart from './Cart';

const App = () => {
  return (
    <CartProvider>
      <Home />
      <Cart />
    </CartProvider>
  );
};

export default App;

Home.js

import React from 'react';
import { useContext } from 'react';
import { CartContext } from './CartContext';

const Home = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => addToCart('Item 1')}>Add to Cart</button>
    </div>
  );
};

export default Home;

Cart.js

import React from 'react';
import { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h1>Cart</h1>
      {cart.map((item) => (
        <div key={item}>
          {item}
          <button onClick={() => removeFromCart(item)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
```

### Example 5

```
1. Settings Context:

jsx
// settingsContext.js
import { createContext, useState } from 'react';

const SettingsContext = createContext();

const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState({
    fontSize: 16,
    theme: 'light',
  });

  const updateSettings = (newSettings) => {
    setSettings({ ...settings, ...newSettings });
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export { SettingsProvider, SettingsContext };

1. Modal Context:

jsx
// modalContext.js
import { createContext, useState } from 'react';

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState({
    isOpen: false,
    content: null,
  });

  const openModal = (content) => {
    setModal({ isOpen: true, content });
  };

  const closeModal = () => {
    setModal({ isOpen: false, content: null });
  };

  return (
    <ModalContext.Provider value={{ modal, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export { ModalProvider, ModalContext };

1. Notification Context:

jsx
// notificationContext.js
import { createContext, useState } from 'react';

const NotificationContext = createContext();

const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (notification) => {
    setNotifications([...notifications, notification]);
  };

  const removeNotification = (notification) => {
    setNotifications(notifications.filter((n) => n !== notification));
  };

  return (
    <NotificationContext.Provider value={{ notifications, addNotification, removeNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};

export { NotificationProvider, NotificationContext }
```