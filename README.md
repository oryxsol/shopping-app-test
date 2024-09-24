# My Next.js Project

This project is built using **Next.js**, **TypeScript**, **React**, and **Jest** for testing. It includes components for a product table and a modal to display product reviews. The project demonstrates server-side rendering (SSR), client-side interactions, and testing using **Jest** and **React Testing Library**.

## Features

- **Next.js** for server-side rendering and routing.
- **TypeScript** for static type checking and better developer experience.
- **@emotion/styled** for modular CSS styling within components.
- **Jest** and **React Testing Library** for unit and component testing.
- **@tanstack/react-table** for dynamic, efficient table handling in React.

---

## Technologies Used

### 1. Next.js
- **Why**: Next.js provides an excellent framework for building React applications with features like server-side rendering (SSR), static site generation (SSG), and API routes. It also offers great SEO capabilities and performance optimizations.
  
### 2. TypeScript
- **Why**: TypeScript is used for its static type checking, which helps catch errors early during development, and improves code readability and maintainability.

### 3. @emotion/styled
- **Why**: @emotion/styled allows us to write CSS directly in JavaScript, making it easy to keep component logic and styling in one place. It's modular and ensures no class name conflicts.

### 4. Jest & React Testing Library
- **Why**: Jest is a testing framework that allows us to test JavaScript and TypeScript code. React Testing Library helps in testing UI components by interacting with them in the same way a user would.

### 5. @tanstack/react-table
- **Why**: This is a powerful and flexible table library for React that supports complex table structures and optimized rendering.

---

## Project Structure

my-nextjs-app/ ├── app/ │ ├── components/ # Reusable React components │ │ ├── ReviewsModal.tsx # Modal to display product reviews │ │ ├── ProductTableClient.tsx # Product table with reviews action │ ├── services/ # API services │ │ └── productService.ts # Product fetching API service │ ├── types/ # TypeScript types ├── pages/ # Next.js pages (includes API routes) ├── tests/ # Jest unit and component tests │ └── ReviewsModal.test.tsx # Test for the ReviewsModal component ├── public/ # Public assets (images, icons) ├── styles/ # Global CSS styles ├── jest.config.js # Jest configuration ├── jest.setup.ts # Jest setup for additional matchers └── README.md # Project readme file


---

## Installation

To get started, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd my-nextjs-app
npm install

---

## Running the Project

To start the development server, run:


```bash
npm run dev


For login page

```bash
username: emilys
passowrd: emilyspass