# Rezept App

## Demo
https://rezept-app.vercel.app/

fest user: username: ayse
            password: 1234 

## Projekt Gif
![rezept-app](https://github.com/user-attachments/assets/2548a25e-8a84-4891-b79d-83105934f22b)



## Project Purpose

The Rezept App is a recipe application that enables users to search for recipes by name or category and view detailed information about them, including ingredients, calorie values, and images. After logging in, users can easily browse through a wide range of recipes. This project was created to enhance skills in using React, Context API for state management, React Router for navigation, and Axios for data fetching.

## Project Structure

```
|-- Rezept-App
|
├── public
│     └── index.html
├── src
│    ├── assets
│    │       └── [images]
│    │
│    ├── components
│    │   └── header
│    │       ├── Form.jsx
│    │       ├── Header.jsx
│    │       └── style.jsx
│    │
│    ├── context
│    │       └── [context files]
│    │
│    ├── navbar
│    │       └── [navbar components]
│    │
│    ├── pages
│    │   ├── about
│    │   │   ├── About.jsx
│    │   │   └── style.jsx
│    │   ├── details
│    │   │   ├── Details.jsx
│    │   │   └── style.jsx
│    │   ├── home
│    │   │   ├── Home.jsx
│    │   │   ├── Recipe.jsx
│    │   │   ├── RecipeCard.jsx
│    │   │   └── style.jsx
│    │   └── login
│    │       ├── Login.jsx
│    │       └── style.jsx
│    │
│    ├── router
│    │   ├── AppRouter.jsx
│    │   └── PrivateRouter.jsx
│    │
│    ├── App.css
│    ├── App.js
│    ├── index.js
│    └── index.css
│
├── .gitignore
├── package.json
├── yarn.lock
└── README.md
```

## Project Features

- **User Authentication**: Implemented using the Context API. Users must log in to access recipe details. Unauthorized users are redirected to the login page.
- **Recipe Search and Filtering**: Users can search for recipes by name and category. Data is fetched from an API using Axios.
- **Recipe Details**: After selecting a recipe, users can view detailed information, including ingredients, calorie values, and images.
- **Styled Components**: All styling is managed with Styled Components for a modular and maintainable design.
- **State Management**: Context API is used to manage the global state for authentication and recipe data.
- **Routing**: React Router is used for navigation between different pages. Programmatic navigation is handled using `useNavigate`.

## Technologies Used

- **ReactJS**: For building the user interface.
  - **useState**: For managing local state within components.
  - **useNavigate**: For programmatic navigation between routes.
- **Styled Components**: For styling the application with modular, component-scoped styles.
- **Context API**: Used for managing global state across the application.
- **Axios**: For making HTTP requests to fetch data from an API.
- **React Router**: For routing and navigation within the application.
- **Local Storage**: To persist user authentication state and data, ensuring that user sessions are maintained even after page refreshes.
- **Responsive Design**: The application is fully responsive and optimized for a variety of devices, from mobile phones to desktops.

## API

The application fetches recipe data from an external API. Example endpoint:

- [Recipe API Endpoint](https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal})

## Outcome

Through this project, I enhanced my skills in the following areas:

- Using **Styled Components** for modular and scalable styling in React.
- Implementing **state management** using Context API.
- Handling **authentication and authorization** in a React application.
- Utilizing **React Router** for navigation and programmatic route changes.
- Fetching and integrating data from APIs using **Axios**.

These skills are fundamental for building robust and feature-rich React applications.

<p align="center"> 📝 Happy Coding! 🍴 </p>
