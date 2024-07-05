# Tailwind with REact app

### step 1
```
npx create-react-app react-with-tailwind-css
```

### step 2
 ```
 cd react-with-tailwind-css
 ```

### step 3

```
npm install react-router-dom
```

### step 4
`
verify the react-with-tailwind-css is woking or not and remove unnecearry file and code and css
`
```
npm start
```

### how to integrate Tailwind css in REact app

## Creating a React application with Tailwind CSS optimized for performance



### Step 1: Installing Tailwind CSS

Once your React app is set up, you can install Tailwind CSS along with its peer dependencies:

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

```

### Step 2: Configuring Tailwind CSS

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
 
 GO TO tailwind.config.js and replace existing with below

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

[Go to official link](https://v2.tailwindcss.com/docs/container)
```
