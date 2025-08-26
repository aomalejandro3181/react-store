# 🚀 React + TypeScript + Tailwind CSS Project

Welcome to **Store**, a web application developed with **React 18**, **TypeScript**, **Tailwind CSS**, and **Ant Design** for some components.

## 📂 Project Structure  

- **public/**: Public files.
- **src/**: Project source code.
  - **assets/**: Static resources like images.
  - **components/**: Reusable React components.
  - **constants/**: Constants used throughout the project.
  - **context/**: Context API implementation for global state management.
  - **helpers/**: Utility/helper functions.
  - **pages/**: Main application pages.
  - **types/**: TypeScript type definitions.
  - **App.css**: Global styles for the application.
  - **App.tsx**: Main application component.
  - **index.css**: Base styles and Tailwind CSS utilities.
  - **main.tsx**: Application entry point.
  - **vite-env.d.ts**: Vite type definitions.
- **index.html**: Main HTML file.
- **package.json**: Project dependencies and scripts.
- **postcss.config.js**: PostCSS configuration.
- **tailwind.config.js**: Tailwind CSS configuration.
- **tsconfig.app.json**: TypeScript configuration for the application.
- **tsconfig.json**: Main TypeScript configuration.
- **tsconfig.node.json**: TypeScript configuration for Node.js.
- **vite.config.ts**: Vite configuration.

## 🛠️ **Technologies Used**

- ⚛️ **React 18** - Library for building user interfaces.
- 📜 **TypeScript** - Static typing for JavaScript.
- 🎨 **Tailwind CSS** - CSS framework for fast and flexible design.
- 🏗 **Vite** - Fast build tool for modern frontend projects.

## 🚀 **Installation and Setup**

### 🔽 Clone the repository  

```bash
git clone git@github.com:TeravisionTraining/reactjs-training.git
cd store


````

## 📦 Install dependencies

```bash
npm install
````

## ▶️ Run the project in development mode

```bash
npm run dev
``````

The development server will start at http://localhost:5173/ (or another port if already in use).

## 🏗  Build for production

```bash
npm run build
``````

## 🎨 Using Tailwind CSS

```bash
export const Button = () => {
  return (
    <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
      Click Me
    </button>
  );
};
``````

## 🔥 Available Scripts

- npm run dev → Starts the development server.
- npm run build → Generates an optimized production build.
- npm run preview → Previews the build before deployment.
- npm run lint → Runs the linter to check for errors.

## Dependencies

- **antd**: Ant Design components.
- **lucide-react**: Lucide icons.
- **react**: React library.
- **react-dom**: React DOM library.
- **react-lazy-load-image-component**: Lazy loading component for images.
- **react-router-dom**: React routing library.

## Development Dependencies

- @eslint/js: Configuración de ESLint para JavaScript.
- @types/react: Tipos de TypeScript para React.
- @types/react-dom: Tipos de TypeScript para React DOM.
- @types/react-lazy-load-image-component: Tipos de TypeScript para react-lazy-load-image-component.
- @vitejs/plugin-react-swc: Plugin de Vite para React con SWC.
- autoprefixer: Autoprefijador de CSS.
- eslint: Linter para JavaScript y TypeScript.
- eslint-plugin-react-hooks: Plugin de ESLint para hooks de React.
- eslint-plugin-react-refresh: Plugin de ESLint para React Refresh.
- globals: Variables globales para ESLint.
- postcss: Procesador de CSS.
- tailwindcss: Framework de CSS.
- typescript: Lenguaje de programación TypeScript.
- typescript-eslint: Integración de TypeScript con ESLint.
- vite: Empaquetador de módulos.
