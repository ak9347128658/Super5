## Creating a React application with Tailwind CSS optimized for performance

### Step 1: Setting Up a New React Project

First, you need to create a new React application. If you haven’t installed create-react-app, you can do so and then create a new app:
```
npx create-react-app my-tailwind-react-app
cd my-tailwind-react-app

```
### to start app
```
npm start
```

### Step 2: Installing Tailwind CSS

Once your React app is set up, you can install Tailwind CSS along with its peer dependencies:

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

```

### Step 3: Configuring Tailwind CSS

To use Tailwind in your React project, you need to include Tailwind's directives in your CSS. Create a CSS file src/index.css and add the following:

```
@tailwind base;
@tailwind components;
@tailwind utilities;

```
### `Then, ensure your src/index.js imports this CSS file:`

 ```
 import './index.css';
 ```

 ### Step 4: Optimizing Tailwind CSS for Production
Tailwind CSS can be configured to purge unused styles automatically, reducing the size of your final CSS bundle significantly. This is done through the tailwind.config.js file. Configure the purge option to remove unused styles in production:
 
```
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

```

### Step 5: Using Tailwind CSS in Your Components

```
function App() {
  return (
    <div className="p-4 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div>
        <h1 className="text-xl font-medium text-black">Welcome to Tailwind</h1>
        <p className="text-gray-500">You are using Tailwind CSS in React!</p>
      </div>
    </div>
  );
}

```

### where to learn

(Go to official link)[https://v2.tailwindcss.com/docs/tility-first]