## My Meal Planner

My Meal Planner is a web application designed to help users plan their meals by adding, viewing, and searching recipes. The app features user authentication to ensure that each user has their own set of recipes.

# Features

* User Registration and Login using Firebase Authentication

* Add new recipes

* Search recipes by name

* Responsive design

# Technologies Used

* Frontend: React, CSS

* Backend: Firebase (Authentication and Firestore)

##Project Structure

my-meal-planner/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Login.js
│   │   ├── RecipeForm.js
│   │   ├── RecipeList.js
│   │   ├── Register.js
│   │   └── SearchBar.js
│   ├── contexts/
│   │   └── AuthContext.js
│   ├── firebase.js
│   ├── App.js
│   ├── index.js
│   └── styles.css
├── .gitignore
├── package.json
└── README.md

# Usage

# Authentication Context (src/contexts/AuthContext.js)

Provides context and hooks for user authentication.

# Recipe List Component (src/components/RecipeList.js)

Displays the list of recipes and includes search functionality.

# Firebase Configuration (src/firebase.js)

Configures Firebase Authentication and Firestore for the application.

// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

# Deployment

This project can be deployed using GitHub Pages. Follow these steps to deploy your application:

1. Ensure your package.json includes the following scripts:

"homepage": "https://<username>.github.io/<repository-name>",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build",
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject"
}

2. Deploy the application:
npm run deploy

# License

This project is licensed under the MIT License. See the LICENSE file for more details.
